import React from 'react';
import { getAllArticles } from '@/lib/markdown';
import ClientHomepage from '@/components/ClientHomepage';

export default function LepakGaming() {
  // Get all articles from markdown files
  const allArticles = getAllArticles();

  return <ClientHomepage articles={allArticles} />;
}
