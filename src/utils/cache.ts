class localCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(...keys: string[]) {
    keys.forEach((key) => {
      localStorage.removeItem(key)
    })
  }

  clearCache() {
    localStorage.clear()
  }
}

export default new localCache()
