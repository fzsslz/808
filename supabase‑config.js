// supabase‑config.js 数据库连接配置
const { createClient } = supabase

// 填入你的项目网址
const SUPABASE_URL = "https://grwawlhjdalnioetwhjs.supabase.co";
// 填入你的可发布密钥
const SUPABASE_ANON_KEY = "sb_publishable_g5q1KeSc2fLoWDlgguD_Yw_ELd3Aao3";

// 创建连接对象，网页靠这个变量supabase和数据库通信
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
