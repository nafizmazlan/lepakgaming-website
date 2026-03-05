import React from 'react';
import { Search, Menu, Home, FileText, Book, HelpCircle, ChevronRight } from 'lucide-react';
import { getAllArticles } from '@/lib/markdown';
import ClientHomepage from '@/components/ClientHomepage';

export default function GameHub() {
  // Get all articles from markdown files
  const allArticles = getAllArticles();

  return <ClientHomepage articles={allArticles} />;
}