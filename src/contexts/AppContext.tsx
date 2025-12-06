import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserData {
  name: string;
  email: string;
  breakupType: string;
  objective: string;
  startDate: string;
  currentDay: number;
}

export interface DayProgress {
  day: number;
  completed: boolean;
  tasks: { id: string; text: string; completed: boolean }[];
  date: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  question: string;
}

export interface ModuleProgress {
  moduleId: number;
  completed: boolean;
  quizScore?: number;
  exerciseCompleted: boolean;
}

interface AppContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  isLoggedIn: boolean;
  logout: () => void;
  dayProgress: DayProgress[];
  updateDayProgress: (day: number, progress: Partial<DayProgress>) => void;
  moduleProgress: ModuleProgress[];
  updateModuleProgress: (moduleId: number, progress: Partial<ModuleProgress>) => void;
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: Omit<JournalEntry, 'id'>) => void;
  streak: number;
  totalPoints: number;
  addPoints: (points: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'planA_user',
  DAY_PROGRESS: 'planA_dayProgress',
  MODULE_PROGRESS: 'planA_moduleProgress',
  JOURNAL: 'planA_journal',
  POINTS: 'planA_points',
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserData | null>(null);
  const [dayProgress, setDayProgress] = useState<DayProgress[]>([]);
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
    const savedDayProgress = localStorage.getItem(STORAGE_KEYS.DAY_PROGRESS);
    const savedModuleProgress = localStorage.getItem(STORAGE_KEYS.MODULE_PROGRESS);
    const savedJournal = localStorage.getItem(STORAGE_KEYS.JOURNAL);
    const savedPoints = localStorage.getItem(STORAGE_KEYS.POINTS);

    // ✅ CRIAR USUÁRIO AUTOMATICAMENTE SE NÃO EXISTIR
    if (savedUser) {
      setUserState(JSON.parse(savedUser));
    } else {
      const defaultUser: UserData = {
        name: 'Usuario',
        email: 'usuario@app.com',
        breakupType: 'distancing',
        objective: 'Crecimiento personal',
        startDate: new Date().toISOString(),
        currentDay: 1,
      };
      setUserState(defaultUser);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(defaultUser));
    }

    if (savedDayProgress) setDayProgress(JSON.parse(savedDayProgress));
    if (savedModuleProgress) setModuleProgress(JSON.parse(savedModuleProgress));
    if (savedJournal) setJournalEntries(JSON.parse(savedJournal));
    if (savedPoints) setTotalPoints(JSON.parse(savedPoints));

    // Initialize day progress if empty
    if (!savedDayProgress) {
      const initialProgress: DayProgress[] = Array.from({ length: 21 }, (_, i) => ({
        day: i + 1,
        completed: false,
        tasks: [
          { id: `${i + 1}-1`, text: 'Completar lectura del día', completed: false },
          { id: `${i + 1}-2`, text: 'Hacer ejercicio práctico', completed: false },
          { id: `${i + 1}-3`, text: 'Escribir en el diario', completed: false },
        ],
        date: '',
      }));
      setDayProgress(initialProgress);
    }

    // Initialize module progress if empty
    if (!savedModuleProgress) {
      const initialModules: ModuleProgress[] = Array.from({ length: 16 }, (_, i) => ({
        moduleId: i + 1,
        completed: false,
        exerciseCompleted: false,
      }));
      setModuleProgress(initialModules);
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (dayProgress.length > 0) localStorage.setItem(STORAGE_KEYS.DAY_PROGRESS, JSON.stringify(dayProgress));
  }, [dayProgress]);

  useEffect(() => {
    if (moduleProgress.length > 0) localStorage.setItem(STORAGE_KEYS.MODULE_PROGRESS, JSON.stringify(moduleProgress));
  }, [moduleProgress]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.JOURNAL, JSON.stringify(journalEntries));
  }, [journalEntries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.POINTS, JSON.stringify(totalPoints));
  }, [totalPoints]);

  const setUser = (newUser: UserData | null) => {
    setUserState(newUser);
    if (newUser) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem(STORAGE_KEYS.USER);
  };

  const updateDayProgress = (day: number, progress: Partial<DayProgress>) => {
    setDayProgress((prev) =>
      prev.map((d) => (d.day === day ? { ...d, ...progress } : d))
    );
  };

  const updateModuleProgress = (moduleId: number, progress: Partial<ModuleProgress>) => {
    setModuleProgress((prev) =>
      prev.map((m) => (m.moduleId === moduleId ? { ...m, ...progress } : m))
    );
  };

  const addJournalEntry = (entry: Omit<JournalEntry, 'id'>) => {
    const newEntry = { ...entry, id: Date.now().toString() };
    setJournalEntries((prev) => [newEntry, ...prev]);
  };

  const addPoints = (points: number) => {
    setTotalPoints((prev) => prev + points);
  };

  // Calculate streak
  const streak = dayProgress.filter((d) => d.completed).length;

  const isLoggedIn = !!user;

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        logout,
        dayProgress,
        updateDayProgress,
        moduleProgress,
        updateModuleProgress,
        journalEntries,
        addJournalEntry,
        streak,
        totalPoints,
        addPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}