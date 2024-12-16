  import { useState, useEffect } from "react";
  import { db } from "@/config";
  import { collection, query, onSnapshot } from "firebase/firestore";

  interface HoodieListProps {
    image: string; 
    description: string;
    price: string;
  }

  export const useProjectsData = () => {
    const [projects, setProjects] = useState<HoodieListProps[]>([]); // Use the Project[] type
  
    useEffect(() => {
      const q = query(collection(db, "hoodies"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedProjects: HoodieListProps[] = []; // Explicitly type the array
        querySnapshot.forEach((doc) => {
          fetchedProjects.push(doc.data() as HoodieListProps); // Type assertion
        });
        setProjects(fetchedProjects); // Update the state
      });
  
      return () => unsubscribe();
    }, []);
  
    return projects;
  };
  