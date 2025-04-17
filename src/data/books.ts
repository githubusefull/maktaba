
export interface Book {
    id: string;
    title: string;
    titleAr: string;
    author: string;
    authorAr: string;
    coverImage: string;
    price: number;
    rating: number;
    categories: string[];
    categoriesAr: string[];
    description: string;
    descriptionAr: string;
    featured: boolean;
    newArrival: boolean;
    publisher: string;
    publisherAr: string;
    publishDate: string;
    pages: number;
    isbn: string;
    language: string;
    languageAr: string;
  }
  
  export const books: Book[] = [
    {
      id: "1",
      title: "The Philosophy of Illumination",
      titleAr: "فلسفة الإشراق",
      author: "Suhrawardi",
      authorAr: "السهروردي",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 24.99,
      rating: 4.7,
      categories: ["Philosophy", "Religion"],
      categoriesAr: ["فلسفة", "دين"],
      description: "A masterpiece of Islamic philosophy that explores the nature of intuitive knowledge and mystical experience.",
      descriptionAr: "تحفة من الفلسفة الإسلامية تستكشف طبيعة المعرفة الحدسية والتجربة الصوفية.",
      featured: true,
      newArrival: false,
      publisher: "Oxford University Press",
      publisherAr: "مطبعة جامعة أكسفورد",
      publishDate: "2021-03-15",
      pages: 320,
      isbn: "978-3456789012",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "2",
      title: "The Conference of the Birds",
      titleAr: "منطق الطير",
      author: "Farid ud-Din Attar",
      authorAr: "فريد الدين العطار",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 18.50,
      rating: 4.9,
      categories: ["Poetry", "Religion"],
      categoriesAr: ["شعر", "دين"],
      description: "A seminal work of Sufi literature depicting the soul's journey to divine truth through an allegory of birds.",
      descriptionAr: "عمل أساسي من الأدب الصوفي يصور رحلة الروح إلى الحقيقة الإلهية من خلال قصة رمزية للطيور.",
      featured: true,
      newArrival: true,
      publisher: "Penguin Classics",
      publisherAr: "كلاسيكيات بينجوين",
      publishDate: "2022-01-10",
      pages: 256,
      isbn: "978-4567890123",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "3",
      title: "Hayy ibn Yaqdhan",
      titleAr: "حي بن يقظان",
      author: "Ibn Tufail",
      authorAr: "ابن طفيل",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 21.99,
      rating: 4.6,
      categories: ["Philosophy", "Fiction"],
      categoriesAr: ["فلسفة", "روايات"],
      description: "A philosophical novel exploring how human reason can discover the highest truths without the aid of society or religion.",
      descriptionAr: "رواية فلسفية تستكشف كيف يمكن للعقل البشري اكتشاف أسمى الحقائق دون مساعدة المجتمع أو الدين.",
      featured: false,
      newArrival: true,
      publisher: "Cambridge University Press",
      publisherAr: "مطبعة جامعة كامبريدج",
      publishDate: "2021-11-20",
      pages: 192,
      isbn: "978-5678901234",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "4",
      title: "The Alchemy of Happiness",
      titleAr: "كيمياء السعادة",
      author: "Al-Ghazali",
      authorAr: "الغزالي",
      coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 19.99,
      rating: 4.8,
      categories: ["Religion", "Philosophy"],
      categoriesAr: ["دين", "فلسفة"],
      description: "A comprehensive guide to achieving true happiness and spiritual fulfillment in this life and the hereafter.",
      descriptionAr: "دليل شامل لتحقيق السعادة الحقيقية والإشباع الروحي في هذه الحياة والآخرة.",
      featured: true,
      newArrival: false,
      publisher: "Islamic Texts Society",
      publisherAr: "جمعية النصوص الإسلامية",
      publishDate: "2020-07-05",
      pages: 224,
      isbn: "978-6789012345",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "5",
      title: "The Book of Healing",
      titleAr: "كتاب الشفاء",
      author: "Ibn Sina (Avicenna)",
      authorAr: "ابن سينا",
      coverImage: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 29.99,
      rating: 4.9,
      categories: ["Philosophy", "Medicine", "Science"],
      categoriesAr: ["فلسفة", "طب", "علوم"],
      description: "A monumental encyclopedia of philosophy, medicine, and science that shaped Islamic and Western thought for centuries.",
      descriptionAr: "موسوعة ضخمة في الفلسفة والطب والعلوم شكلت الفكر الإسلامي والغربي لقرون.",
      featured: false,
      newArrival: false,
      publisher: "Princeton University Press",
      publisherAr: "مطبعة جامعة برينستون",
      publishDate: "2021-09-30",
      pages: 428,
      isbn: "978-7890123456",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "6",
      title: "The Muqaddimah",
      titleAr: "المقدمة",
      author: "Ibn Khaldun",
      authorAr: "ابن خلدون",
      coverImage: "https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 26.50,
      rating: 4.8,
      categories: ["History", "Philosophy", "Sociology"],
      categoriesAr: ["تاريخ", "فلسفة", "علم اجتماع"],
      description: "A groundbreaking work in the philosophy of history and sociology that analyzes the cycles of civilization.",
      descriptionAr: "عمل رائد في فلسفة التاريخ وعلم الاجتماع يحلل دورات الحضارة.",
      featured: true,
      newArrival: false,
      publisher: "Cairo University Press",
      publisherAr: "مطبعة جامعة القاهرة",
      publishDate: "2020-05-12",
      pages: 512,
      isbn: "978-8901234567",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "7",
      title: "The Ring of the Dove",
      titleAr: "طوق الحمامة",
      author: "Ibn Hazm",
      authorAr: "ابن حزم",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 17.99,
      rating: 4.5,
      categories: ["Literature", "Poetry"],
      categoriesAr: ["أدب", "شعر"],
      description: "A treatise on the nature of love and lovers, blending personal anecdotes with philosophical insights and poetry.",
      descriptionAr: "رسالة عن طبيعة الحب والعشاق، تمزج بين القصص الشخصية والرؤى الفلسفية والشعر.",
      featured: false,
      newArrival: true,
      publisher: "Andalus Books",
      publisherAr: "كتب الأندلس",
      publishDate: "2022-02-14",
      pages: 176,
      isbn: "978-9012345678",
      language: "Arabic",
      languageAr: "العربية"
    },
    {
      id: "8",
      title: "The Incoherence of the Philosophers",
      titleAr: "تهافت الفلاسفة",
      author: "Al-Ghazali",
      authorAr: "الغزالي",
      coverImage: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      price: 22.99,
      rating: 4.7,
      categories: ["Philosophy", "Religion"],
      categoriesAr: ["فلسفة", "دين"],
      description: "A critique of Aristotelian philosophy as interpreted by Avicenna and Al-Farabi, defending Islamic theology against Greek influence.",
      descriptionAr: "نقد للفلسفة الأرسطية كما فسرها ابن سينا والفارابي، ودفاع عن علم الكلام الإسلامي ضد التأثير اليوناني.",
      featured: false,
      newArrival: false,
      publisher: "Al-Azhar University Press",
      publisherAr: "مطبعة جامعة الأزهر",
      publishDate: "2021-08-22",
      pages: 304,
      isbn: "978-0123456789",
      language: "Arabic",
      languageAr: "العربية"
    }
  ];
  
  export const getBookById = (id: string): Book | undefined => {
    return books.find(book => book.id === id);
  };
  
  export const getFilteredBooks = (
    searchTerm: string = "",
    category: string = "",
    featured: boolean | null = null,
    newArrival: boolean | null = null
  ): Book[] => {
    return books.filter(book => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.titleAr.includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authorAr.includes(searchTerm);
  
      // Category filter
      const matchesCategory = category === "" || 
        book.categories.some(c => c.toLowerCase() === category.toLowerCase()) ||
        book.categoriesAr.some(c => c === category);
  
      // Featured filter
      const matchesFeatured = featured === null || book.featured === featured;
  
      // New arrival filter
      const matchesNewArrival = newArrival === null || book.newArrival === newArrival;
  
      return matchesSearch && matchesCategory && matchesFeatured && matchesNewArrival;
    });
  };
  
  export const getCategories = (): string[] => {
    const categoriesSet = new Set<string>();
    
    books.forEach(book => {
      book.categories.forEach(category => {
        categoriesSet.add(category);
      });
    });
    
    return Array.from(categoriesSet).sort();
  };
  
  export const getCategoriesAr = (): string[] => {
    const categoriesSet = new Set<string>();
    
    books.forEach(book => {
      book.categoriesAr.forEach(category => {
        categoriesSet.add(category);
      });
    });
    
    return Array.from(categoriesSet).sort();
  };