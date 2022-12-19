import { useEffect, useState } from "react"

// Declare a function named "useLocalStorage" that takes in two arguments:
// a "key" of type string and an "initialValue" of type T or a function that returns a value of type T
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Declare a new state variable called "value" using the "useState" hook.
  // The initial value of "value" is determined by the function passed as an argument to "useState".
  // This function is called a "state initializer" and it's executed when the component is first rendered.
  // The "<T>" after "useState" indicates that "value" has the same type as the "initialValue" argument passed to the "useLocalStorage" function.
  const [value, setValue] = useState<T>(() => {
    // Get the value stored in local storage for the provided "key"
    const jsonValue = localStorage.getItem(key)
    // If a value was retrieved from local storage for the provided "key", parse the value as JSON and return it
    if (jsonValue != null) return JSON.parse(jsonValue)
    // If "initialValue" is a function, call the function and return its result
    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    }
    // If "initialValue" is not a function, simply return the value of "initialValue"
    return initialValue
  })

  // Declare a new effect using the "useEffect" hook.
  // The function passed as an argument to "useEffect" will be executed after the component renders.
  useEffect(() => {
    // Store the current value of "value" in local storage using the provided "key"
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]) // The effect will only be re-run if the "key" or "value" changes

  // Return the "value" and "setValue" variables
  return [value, setValue] as [typeof value, typeof setValue]
}
