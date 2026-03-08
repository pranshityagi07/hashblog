import logo from './hash_logo.png'
import upload_area from './upload_area.svg'
import star_icon from './star_icon.svg'
import gradientBackground from './gradientBackground.png'

export const assets = {
    logo,
    upload_area,
    star_icon,
    gradientBackground,
    
}
export const blogCategories = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance']


export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    
}

export const footer_data = [
  {
    title: "Explore",
    links: ["Home", "All Blogs", "Categories", "Trending Blogs", "Latest Posts"],
    urls: ["/", "/blogs", "/categories", "/trending", "/latest"]
  },
  {
    title: "Community",
    links: ["Blog", "Dashboard", "AI Blog Generator", "Guidelines", "Support"],
    urls: ["/blog", "/dashboard", "/ai-blog-generator", "/guidelines", "/support"]
  },
  {
    title: "Company",
    links: ["About Hashblog", "Privacy Policy", "Terms of Service", "Contact"],
    urls: ["/about-hashblog", "/privacy-policy", "/terms-of-service", "/contact"]
  }
];