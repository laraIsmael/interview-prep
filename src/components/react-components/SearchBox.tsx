import { useState, useEffect, useRef, useCallback } from "react";

interface SearchBoxProps {
  // called when the debounced query updates after delay
  onSearch: (query: string) => void;

  // optional initial value for the imput
  initialValue?: string;

  // Debounce delay in miliseconds (default 500ms)
  delay?: number;

  //optional placeholder
  placeholder?: string;
}
export default function SearchBox({
  onSearch,
  initialValue = "",
  delay = 500,
  placeholder = "Search...",
}: SearchBoxProps) {
  // setting up states
  const [query, setQuery] = useState<string>(initialValue);
  const [deboucedQ, setDebaouncedQ] = useState<string>(initialValue);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // store timer id so we can clear on rerender/unmount
  const timerRef = useRef<number | null>(null);

  // handle for input change - when user types
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      setIsTyping(true);
    },
    []
  );

  // handle enter key - submit imiditialy
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        // clear pandding debounced
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setDebaouncedQ(query);
        setIsTyping(false);
      }
    },
    [query]
  );

  // debounced effect - when query changes schedule to update debouncedQ
  useEffect(() => {
    // clear exiating timer
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    // set a new timer
    timerRef.current = window.setTimeout(() => {
      setDebaouncedQ(query);
      setIsTyping(false);
      timerRef.current = null;
    }, delay);

    // cleanup if query changes or component unmount
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [query, delay]);

  // call onSearch whenever debouncedQ changes
  useEffect(() => {
    onSearch(deboucedQ);
  }, [deboucedQ, onSearch]);

  return (
    <div className="w-full max-w-md">
      <label htmlFor="searchbox" className="sr-only">
        Search
      </label>

      <div className="relative">
        <input
          id="searchbox"
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-label="search"
          placeholder={placeholder}
          className="w-full rounded-lg border border-grey-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
        {isTyping && (
          <div
            area-hidden
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
          >
            Typing...
          </div>
        )}
      </div>
      {deboucedQ && (
        <p className="mt-2 text-sm text-green-700">
          Search triggered for: <span className="font-medium">{deboucedQ}</span>
        </p>
      )}
    </div>
  );
}
