// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames)) {
        throw new Error('Both inputs must be arrays');
    }
    if (names.length !== modifiedNames.length) {
        throw new Error('Both arrays must have the same length');
    }

    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

