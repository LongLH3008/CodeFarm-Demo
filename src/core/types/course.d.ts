enum TypeCourse {
    'Free' = 1, // Miễn phí
    'Paid' = 2  // Mất phí
}

enum LevelCourse {
    'Easy' = 1,         // Dễ
    'Medium' = 2,   // Trung bình
    'Hard' = 3          // Khó
}

// type StatusCourse = Pick<typeof EStatus, 'Active' | 'Inactive'>

enum StatusCourse {
    'Active' = 1,
    'Inactive' = 2
}

enum StatusBuyCourse {
    'Purchased' = 1,        // Đã mua
    'Not_Purchased' = 2   // Chưa mua
}

interface ICourseDetail {
    id: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    authorId: number;
    status: StatusCourse;
    teacherId: number[];
    title: string;
    thumbnail: string;
    description: string;
    typeCourse: TypeCourse;
    oldPrice: number;
    price: number;
    symbol: string;
    videoIntro: string;
    statusBuy: StatusBuyCourse;
    level: LevelCourse;
    publishDate: string;
}

interface ICourseItem {
    slug: string;
    id: number;
    totalStudent: number
    totalLesson: number
    thumbnail
    title: string
}


