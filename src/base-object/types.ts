export type EventHandler<T> = (data: T) => Promise<void>;

export type Unsubscribe = () => void;
