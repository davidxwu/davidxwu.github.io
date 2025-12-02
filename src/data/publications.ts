export interface Author {
  name: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: Author[];
  venue: string;
  venueShort: string;
  year: number;
  arxiv?: string;
  selected?: boolean;
  equalContribution?: boolean;
}

// Author directory with URLs
const authors = {
  david: { name: "David X. Wu" },
  brice: { name: "Brice Huang", url: "https://bricehuang.com/" },
  prasad: { name: "Prasad Raghavendra", url: "https://people.eecs.berkeley.edu/~prasad/" },
  sidhanth: { name: "Sidhanth Mohanty", url: "http://sidhanthm.com/" },
  anant: { name: "Anant Sahai", url: "https://www2.eecs.berkeley.edu/Faculty/Homepages/sahai.html" },
  chulhee: { name: "Chulhee Yun", url: "https://chulheeyun.github.io/" },
  suvrit: { name: "Suvrit Sra", url: "https://optml.mit.edu/" },
  dpalmer: { name: "David Palmer", url: "https://dpa1mer.github.io/" },
  daryl: { name: "Daryl R. DeFord", url: "https://www.math.wsu.edu/faculty/ddeford/" },
  amit: { name: "Amit Rajaraman", url: "https://amitrajaraman.github.io/" },
  kuikui: { name: "Kuikui Liu", url: "https://kuikuiliu.github.io/" },
} as const;

export const publications: Publication[] = [
  {
    title: "Weak Poincaré Inequalities, Simulated Annealing, and Sampling from Spherical Spin Glasses",
    authors: [authors.brice, authors.sidhanth, authors.amit, authors.david],
    venue: "ACM Symposium on Theory of Computing",
    venueShort: "STOC",
    year: 2025,
    arxiv: "2411.09075",
    selected: true,
    equalContribution: true,
  },
  {
    title: "Provable Weak-to-Strong Generalization via Benign Overfitting",
    authors: [authors.david, authors.anant],
    venue: "International Conference on Learning Representations",
    venueShort: "ICLR",
    year: 2025,
    arxiv: "2410.04638",
    selected: true,
  },
  {
    title: "Locally Stationary Distributions: A Framework for Analyzing Slow-Mixing Markov Chains",
    authors: [authors.kuikui, authors.sidhanth, authors.prasad, authors.amit, authors.david],
    venue: "IEEE Annual Symposium on Foundations of Computer Science",
    venueShort: "FOCS",
    year: 2024,
    arxiv: "2405.20849",
    selected: true,
    equalContribution: true,
  },
  {
    title: "Fast Mixing in Sparse Random Ising Models",
    authors: [authors.kuikui, authors.sidhanth, authors.amit, authors.david],
    venue: "IEEE Annual Symposium on Foundations of Computer Science",
    venueShort: "FOCS",
    year: 2024,
    arxiv: "2405.06616",
    selected: true,
    equalContribution: true,
  },
  {
    title: "Robust recovery for stochastic block models, simplified and generalized",
    authors: [authors.sidhanth, authors.prasad, authors.david],
    venue: "ACM Symposium on Theory of Computing",
    venueShort: "STOC",
    year: 2024,
    arxiv: "2402.13921",
    selected: true,
    equalContribution: true,
  },
  {
    title: "Precise Asymptotic Generalization for Multiclass Classification with Overparameterized Linear Models",
    authors: [authors.david, authors.anant],
    venue: "Neural Information Processing Systems",
    venueShort: "NeurIPS",
    year: 2023,
    arxiv: "2306.13255",
  },
  {
    title: "On the Training Instability of Shuffling SGD with Batch Normalization",
    authors: [authors.david, authors.chulhee, authors.suvrit],
    venue: "International Conference on Machine Learning",
    venueShort: "ICML",
    year: 2023,
    arxiv: "2302.12444",
  },
  {
    title: "Lower Bounds for Multiclass Classification with Overparameterized Linear Models",
    authors: [authors.david, authors.anant],
    venue: "International Symposium on Information Theory",
    venueShort: "ISIT",
    year: 2023,
  },
  {
    title: "Maximum A Posteriori Inference of Random Dot Product Graphs via Conic Programming",
    authors: [authors.david, authors.dpalmer, authors.daryl],
    venue: "SIAM Journal on Optimization",
    venueShort: "SIOPT",
    year: 2022,
    arxiv: "2101.02180",
  },
];

export function getPublicationsByYear() {
  const byYear = new Map<number, Publication[]>();
  
  for (const pub of publications) {
    const existing = byYear.get(pub.year) || [];
    existing.push(pub);
    byYear.set(pub.year, existing);
  }
  
  return Array.from(byYear.entries()).sort((a, b) => b[0] - a[0]);
}

export function getSelectedPublications() {
  return publications.filter(p => p.selected);
}
