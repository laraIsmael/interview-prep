import SearchBox from "./SearchBox";

const handleSearch = (query: string) => {
  console.log("Search fired for: ", query);
};
export default function ReactComponents() {
  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl text-grey-800 font bold">
        Component Prompt: Debounced Search Input
      </h2>
      <div className="text-grey-800 whitespace-pre-line">
        <strong>1. Local state:</strong>
        <br />
        * query — controlled input value (updates every keystroke).
        <br />
        * debouncedQuery — value that updates only after debounce delay. When
        this changes, we call onSearch.
        <br />
        * isTyping — true when user is actively typing; false after debounce
        finishes.
        <br />
        <br />
        <strong>2. Debounce logic</strong>
        <br />
        * Use a useEffect that watches query. Inside it, start a setTimeout
        that:
        <br />
        - updates debouncedQuery after 500ms,
        <br />
        - sets isTyping to false (typing finished).
        <br />
        * While typing (before the timeout fires), isTyping stays true.
        <br />
        <br />
        <strong>3. Cleanup Clear</strong>
        <br />
        * The timer on each rerender or unmount so we don’t call stale timeouts.
        <br />
        <br />
        <strong>4. onSearch</strong>
        <br />
        * call Use a useEffect that watches debouncedQuery. When it changes,
        call the onSearch prop.
        <br />
        <br />
        <strong>5. Performance</strong>
        <br />
        * Use useRef to store timer id (avoids re-renders).
        <br />
        * Use useCallback for handlers to avoid unnecessary re-renders in parent
        contexts.
        <br />
        * Keyboard accessibility:
        <br />- Enter key triggers immediate search (optional), but still
        respects debounced behavior for normal typing — we'll call onSearch
        immediately on Enter.
      </div>
      <SearchBox onSearch={handleSearch} />
    </div>
  );
}
