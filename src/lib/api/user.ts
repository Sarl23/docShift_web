export const getUser = async (id: string) => {
  try {
    const response = await fetch(`api.example.com/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
