import React from 'react'

import { useEffect, useState } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const res = await fetch("/data/posts.json");
      const data = await res.json();
      setPosts(data.posts);
      setCategories(data.categories);
    } catch (err) {
      setError("تعذر تحميل التدوينات");
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return { posts, categories, loading, error };
}