export const searchPatient = (obj: object, query: string) => {
  const lowerQuery = query.toLowerCase();
	for (const value of Object.values(obj)) {
        // Check if the value is a string and contains the search string
        if (typeof value === 'string' && value.toLowerCase().includes(lowerQuery)) {
            return value; // Match found
        }
    }
  return false; // No match found
};

export const searchPatientbyId = (obj: object, id: string) => {
  const lowerQuery = id.toLowerCase();
	for (const value of Object.values(obj)) {
        // Check if the value is a string and contains the search string
        if (typeof value === 'string' && value.toLowerCase() === lowerQuery) {
            return value; // Match found
        }
    }
  return false; // No match found
};

