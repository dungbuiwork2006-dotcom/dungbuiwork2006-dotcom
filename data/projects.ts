export type Project = {
  id: string; title: string[]; role: string; category: string; date?: string;
  description: string[]; stack: string[]; image: string; imageAlt: string;
  programs?: string[];
  metrics?: { value: string; label: string }[];
  progression?: { label: string; role: string; date: string };
};
export const projects: Project[] = [
  {
    id: "01", title: ["ECC", "EVENT SERIES"], role: "BAN TỔ CHỨC",
    category: "EVENT ORGANIZATION · ECC", image: "/images/hình ảnh/Project/su-kien.png.jpg",
    imageAlt: "Hoạt động trong chuỗi sự kiện ECC",
    description: ["Tham gia tổ chức và vận hành chuỗi hoạt động ECC, từ quá trình chuẩn bị, phối hợp giữa các thành viên đến hỗ trợ triển khai chương trình trong thực tế."],
    programs: ["ECC TẬP SỰ", "ECC PACK 1", "ECC PACK 2"],
    stack: ["EVENT PLANNING", "TEAMWORK", "COORDINATION", "OPERATIONS"],
  },
  {
    id: "02", title: ["BEYOND", "CAMPUS"], role: "CỘNG TÁC VIÊN SỰ KIỆN",
    category: "EVENT COLLABORATION · BEYOND CAMPUS", image: "/images/hình ảnh/Project/Cong-tac-vien.jpg",
    imageAlt: "Bùi Trí Dũng tham gia cộng tác sự kiện",
    description: ["Tham gia hỗ trợ các sự kiện bên ngoài trường với vai trò cộng tác viên, qua đó có cơ hội làm việc với nhiều đội ngũ, tiếp xúc với môi trường tổ chức sự kiện thực tế và rèn luyện khả năng giao tiếp, phối hợp và thích nghi."],
    stack: ["EVENT OPERATIONS", "TEAMWORK", "COMMUNICATION", "ADAPTABILITY"],
  },
  {
    id: "03", title: ["FBA MENTORSHIP", "PROGRAM 2026"], role: "TRƯỞNG BAN ĐỐI NGOẠI",
    date: "10/2025 — 07/2026", category: "LEADERSHIP · EXTERNAL RELATIONS",
    image: "/images/hình ảnh/Project/FBA-Mentorship Program.png.jpg", imageAlt: "FBA Mentorship Program 2026",
    description: ["Đảm nhiệm vai trò Trưởng Ban Đối ngoại của FBA Mentorship Program 2026, chương trình kết nối sinh viên khối ngành Kinh tế với các chuyên gia và quản lý giàu kinh nghiệm trong ngành."],
    metrics: [{ value: "07", label: "TEAM MEMBERS" }, { value: "40", label: "MENTORS" }, { value: "80+", label: "MENTEES" }],
    progression: { label: "FROM TEAM MEMBER → TEAM LEAD", role: "THÀNH VIÊN BAN ĐỐI NGOẠI · FBA ELITE", date: "10/2024 — 10/2025" },
    stack: ["LEADERSHIP", "EXTERNAL RELATIONS", "COMMUNICATION", "PARTNERSHIP"],
  },
  {
    id: "04", title: ["ON", "THE MIC."], role: "MC / NGƯỜI DẪN CHƯƠNG TRÌNH",
    category: "HOSTING · COMMUNICATION", image: "/images/hình ảnh/Project/MC-png.jpg",
    imageAlt: "Bùi Trí Dũng trong vai trò người dẫn chương trình",
    description: [
      "Trải nghiệm đứng trên sân khấu với vai trò MC, dẫn dắt nội dung chương trình và kết nối với khán giả.",
      "Mỗi lần cầm micro là một cơ hội để tôi rèn luyện khả năng giao tiếp, phản ứng trước những tình huống thực tế và sự tự tin trước đám đông.",
    ],
    stack: ["PUBLIC SPEAKING", "COMMUNICATION", "STAGE PRESENCE"],
  },
];
