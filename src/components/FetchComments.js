import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const useFetchComments = () => {
  const db = getFirestore();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsCol = collection(db, 'comments');
        const commentSnapshot = await getDocs(commentsCol);
        const commentList = commentSnapshot.docs.map(doc => doc.data());
        setComments(commentList);
      } catch (error) {
        setError(error);
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [db]);

  return { comments, error };
};

export default useFetchComments;
