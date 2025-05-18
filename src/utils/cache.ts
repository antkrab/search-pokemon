type CacheItem<T> = {
    data: T;
    expiry: number;
  };
  
  export class CacheUtil {
    private static cache: Record<string, CacheItem<any>> = {};
    private static defaultTTL = 30 * 60 * 1000; // 30 minutes
  

    static set<T>(key: string, data: T, ttl = CacheUtil.defaultTTL): void {
      const expiry = Date.now() + ttl;
      CacheUtil.cache[key] = { data, expiry };
    }
  
    static get<T>(key: string): T | null {
      const item = CacheUtil.cache[key];
      
      
      if (item && Date.now() < item.expiry) {
        return item.data as T;
      }
      
      
      if (item) {
        delete CacheUtil.cache[key];
      }
      
      return null;
    }
  
    
    static clear(key?: string): void {
      if (key) {
        delete CacheUtil.cache[key];
      } else {
        CacheUtil.cache = {};
      }
    }
  }