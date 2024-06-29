const SearchModal = () => {
  const handleSearch = () => {
    // Implement your search logic here
    const searchQuery = ""; // Define the searchQuery variable
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      <button onClick={handleSearch}>Open Search Modal</button>
      {/* Add your modal component here  yes papa*/}
    </div>
  );
};

export default SearchModal;
