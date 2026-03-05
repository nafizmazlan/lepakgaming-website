import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

// Get all markdown files from a category
export function getArticlesByCategory(category: string): Article[] {
  const categoryPath = path.join(contentDirectory, category);
  
  // Check if directory exists
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryPath);
  
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        author: data.author,
        date: data.date,
        category: category as 'reviews' | 'news' | 'guides' | 'qa',
        platform: data.platform,
        image: data.image,
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        type: data.type || 'original',
        source: data.source,
        sourceUrl: data.sourceUrl,
        content: content,
      } as Article;
    });

  return articles;
}

// Get all articles from all categories
export function getAllArticles(): Article[] {
  const categories = ['reviews', 'news', 'guides', 'qa'];
  const allArticles: Article[] = [];

  categories.forEach(category => {
    const articles = getArticlesByCategory(category);
    allArticles.push(...articles);
  });

  // Sort by date (newest first)
  return allArticles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get a single article by category and slug
export async function getArticleBySlug(category: string, slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      author: data.author,
      date: data.date,
      category: category as 'reviews' | 'news' | 'guides' | 'qa',
      platform: data.platform,
      image: data.image,
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      type: data.type || 'original',
      source: data.source,
      sourceUrl: data.sourceUrl,
      content: contentHtml,
    } as Article;
  } catch (error) {
    return null;
  }
}