import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Github, Instagram, ArrowRight, ExternalLink, Sparkles, Code2, Cpu, Zap, GraduationCap, Award, Phone, Bot, ChevronLeft, ArrowLeft, PlayCircle, X, Play } from 'lucide-react';

// 导入本地图片示例：
// 这种方式在打包时，Vite 会自动把图片重命名并放入输出目录
import HeroImage from './assets/hero.png'; 

// --- Data ---
const projectsData = [
  { 
    id: '01',
    title: 'Aura · 心理能量疗愈小程序', 
    client: '独立产品规划 / 全栈开发 / RAG 搭建',
    role: '2025.3',
    tags: ['Vibe Coding', '小程序', '心理学'],
    showcaseType: 'mockups', 
    mockups: [ 
      '/aura-1.png',
      '/aura-2.png',
      '/aura-3.png',
      '/aura-4.png',
      '/aura-5.png'
    ],
    approach: '从 0→1 规划心理与晶石疗愈小程序。 针对「五行 / 塔罗」垂直场景构建专属知识库，独立跑通 RAG 链路，解决大模型幻觉痛点；基于 Cursor / Gemini 生成前后端代码，完成腾讯云部署并上线微信小程序平台。',
    desc: "从 0→1 规划心理与晶石疗愈小程序。\n针对「五行 / 塔罗」垂直场景构建专属知识库，独立跑通 RAG 链路，解决大模型幻觉痛点；基于 Cursor / Gemini 生成前后端代码，完成腾讯云部署并上线微信小程序平台", 
    highlights: [
       { label: '0→1', sub: '小程序闭环' },
       { label: 'MVP', sub: '极速落地' }
     ],
    imageUrl: '/aura-main.gif', 
    videoUrl: '', 
    bgImageUrl: '/forest.gif', 
    detailColor: 'bg-green-600',
    detailImages: [ 
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200'
    ],
    qrCodeUrl: '/aura-qr.png' 
  },
  { 
    id: '02',
    title: '广告投放素材运营', 
    client: '多行业客户',
    role: '素材运营 / 视频剪辑',
    tags: ['广告投放', '素材运营', '数据分析', 'AIGC'],
    approach: '针对不同行业客户的投放需求，制定差异化的素材策略。通过数据回收（消耗、点击率、转化率）不断优化创意方向，提升跑量素材的产出效率。',
    desc: '运营广告投放内容素材，负责从素材策划、视频剪辑/AIGC生成到后期数据追踪的全链路素材运营工作 。', 
    highlights: [
      { label: '爆款产出', sub: '高消耗素材' },
      { label: '数据驱动', sub: 'ROI 提升' }
    ],
    imageUrl: '/inspo-2.gif', 
    detailColor: 'bg-indigo-600',
    showcaseType: 'ad-portfolio',
    campaigns: [
      {
        client: 'Lazada',
        logo: '/logos/lazada.png', 
        stats: [
          { label: '月日均消耗', value: '待补充' },
          { label: '总 ROI', value: '待补充' }
        ],
        materials: [
          {
            type: 'banner',
            src: '/lazada-1.jpg',
            region: 'PHL',
            spending: '1632.02USD',
            strategy: '针对学生群体，通过清新生活化的洗护场景结合 50% 折扣，提升开学季点击率。',
            prompt: '【视觉风格】东南亚电商风格banner设计，转化导向，干净排版，高对比，高点击率，4k，画面左侧一张年轻美丽的东南亚女性美妆广告特写照片。她留着湿漉漉的深色头发，正拿着睫毛膏刷涂抹睫毛，眼神直视镜头。她的皮肤具有自然的亮泽肌理，脸上带有细腻的写实水珠。背景是干净的淡蓝色瓷砖墙。自然电影光效，商业彩妆广告风格，超写实，画面右侧超大白色粗体标题（บิวตี้ดีลดีวันพฤหัส）立体字效果，强视觉冲击，下方卡片式信息区，两个优惠券模块拼接（25% + 20%），简洁优惠券icon辅助，扁平渐变风格。',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/lazada-2.jpg',
            region: 'PHL',
            spending: '945.04USD',
            strategy: '8.8 大促主题，采用强对比的红色视觉与霓虹灯带，营造紧迫的购物氛围。',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/lazada-3.jpg',
            region: '待补充',
            spending: '666.28USD',
            strategy: '运动品类专场，利用动感十足的人物跑姿与城市天际线，传达品牌活力。',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/lazada-4.jpg',
            region: 'PHL',
            spending: '773.80USD',
            strategy: '发薪日大促 (Payday Sale)，突出国际大牌折扣，使用金属质感 UI 提升品质感。',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/lazada-5.jpg',
            region: 'PHL',
            spending: '444.32USD',
            strategy: '发薪日大促 (Payday Sale)，结合品牌吉祥物 IP 与礼盒元素，增加亲和力与互动感。',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          }
        ]
      },
      {
        client: 'Shopee',
        logo: '/logos/shopee.png', 
        stats: [
          { label: '月日均消耗', value: '待补充' }
        ],
        materials: [
          {
            type: 'banner',
            src: '/shopee-1.jpg',
            region: 'PHL',
            spending: '582.55USD',
            strategy: '2026 Shopee 菲律宾发薪日大促 DSP 素材，采用极简高转化布局，突出 99% OFF 核心利益点，通过 3D 电商视觉提升官方质感。',
            prompt: '【视觉风格】2026 Shopee Philippines PayDay Sale DSP信息流高CTR商业广告，参考Shopee官方活动KV，高级Premium 3D电商商业视觉。整体采用Shopee品牌橙（Shopee Orange）与Golden Orange高饱和渐变，搭配少量亮黄色及Shopee Blue形成鲜明视觉层次，整体年轻、热烈、有冲击力，营造强烈的Pay Day购物狂欢氛围。\\n\\n整体设计遵循2026东南亚Shopee DSP高CTR素材趋势，采用极简高转化布局，仅保留3–4个核心视觉元素，大面积留白，让用户在1秒内快速获取利益点。画面采用高级商业布光、柔和体积光、真实镜面高光、细腻阴影及高品质材质表现，整体更具官方活动KV质感。\\n\\n相比普通促销KV，画面加入适量动感元素，如流动光轨、环形发光底座、轻微速度线、漂浮光片及柔和粒子，让画面更有节奏感、更具活力，但整体保持高级、简洁，不显杂乱。\\n\\n字体采用现代超粗无衬线字体，并带有轻微3D厚度与高光描边，整体文字层级清晰，以折扣利益点作为第一视觉。\\n\\nPAYDAY SALE采用白色或浅暖黄色填充，搭配较深的橙红色描边，增加轻微立体阴影及柔和高光，使标题更加精致、有层次，但视觉权重明显低于折扣数字。标题尺寸适中，不作为画面中心，而是作为活动标签放置于折扣信息上方，与整体视觉保持协调。\\n\\n99%采用超大立体数字设计，白色填充搭配橙橘色渐变描边及柔和阴影，占据画面约30%的视觉面积，成为整个画面的第一视觉焦点。\\n\\nShopee Logo必须完全按照参考图片保持一致，不允许修改颜色、比例、字体或任何设计细节。\\n\\n【创意主体】上传的两张参考产品图片中的产品必须同时出现在画面中，两款产品的外观、颜色、比例、材质、品牌标识及所有设计细节必须与参考图片完全一致，不允许修改产品造型或AI自由发挥。\\n\\n两款产品采用高端商业摄影方式展示，可采用一前一后错落悬浮布局，或分别放置于不同高度的3D发光圆形展示台上，形成自然层次感。其中一款产品作为主视觉略大，另一款作为辅助视觉，两款产品都必须完整、清晰展示，不得裁切、遮挡或弱化其中任意一款产品。\\n\\n产品周围加入少量发光光环、流动光轨及轻微速度感元素，增强画面活力，但所有特效均不得遮挡产品主体。\\n\\n画面仅保留以下四个核心元素：Shopee Logo、两款参考产品、超大利益点、超大CTA按钮。不加入金币、优惠券、礼盒、购物袋、大量ICON、复杂装饰或其他商品，保持画面简洁聚焦。不要出现手机屏幕、Shopee App界面、网页UI或任何APP界面元素。\\n\\n【场景描述】背景采用Shopee品牌橙色至金橙色渐变，加入极浅透视网格、柔和光束、轻微体积光以及少量抽象几何光片，营造高级商业空间感。产品底部采用一至两个圆形展示台，增强画面层次，但整体保持简洁，避免背景元素抢夺视觉焦点。整体视觉重心集中于优惠信息、产品及CTA按钮，符合Shopee菲律宾信息流广告风格。\\n\\n【营销文案】PAY DAY SALE, UP TO 99% OFF, FREE SHIPPING. CTA按钮（超大）：SHOP NOW. 版式建议：将 99% 放大为画面最大视觉元素，\"UP TO\" 与 \"OFF\" 作为辅助文字围绕数字排版；FREE SHIPPING 采用Shopee蓝色圆角胶囊标签，放置于折扣信息下方；PAY DAY SALE 位于顶部作为活动主题；SHOP NOW 按钮宽大醒目，采用Shopee蓝底白字，提升点击引导效果。整体画面控制在4个核心信息点内，比参考图更简洁、更符合2026年Shopee菲律宾DSP信息流高CTR素材设计趋势。',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/shopee-2.jpg',
            region: 'VNM',
            spending: '494.93USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/shopee-3.jpg',
            region: 'BRA',
            spending: '588.50USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/shopee-4.jpg',
            region: '待补充',
            spending: '待补充',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'banner',
            src: '/shopee-5.jpg',
            region: 'BRA',
            spending: '736.47USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          }
        ]
      },
      {
        client: 'Trip.com',
        logo: '/logos/trip.png', 
        stats: [
          { label: '月日均消耗', value: '待补充' }
        ],
        materials: [
          {
            type: 'video',
            src: '/trip-1.mp4',
            region: 'HKG',
            spending: '684.05USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'video',
            src: '/trip-2.mp4',
            region: 'HKG',
            spending: '960.39USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'video',
            src: '/trip-3.mp4',
            region: 'HKG',
            spending: '457.64USD',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          },
          {
            type: 'video',
            src: '/trip-4.qt',
            region: 'HKG',
            spending: '待补充',
            strategy: '待补充策略思考',
            prompt: '待补充 AI 提示词',
            tool: 'AI Tool',
            metrics: '待补充'
          }
        ]
      }
    ]
  },
  { 
    id: '03',
    title: 'AI Video', 
    client: 'Internal Project',
    role: 'Product Designer',
    approach: '',
    desc: '✦ 这是我和 AI 一起玩出来的一小片影像世界。', 
    imageUrl: '/video-main.gif', 
    isPlaceholder: false,
    detailColor: 'bg-purple-600',
    showcaseType: 'video-grid',
    videoCategories: [
      {
        title: 'MV',
        videos: [
          { id: 'mv-1', title: 'MV Concept', cover: '/video-1.gif', bvid: 'BV1wEdSBSELc' }
        ]
      },
      {
        title: '品牌创意广告',
        videos: [
          { id: 'ad-1', title: '宝矿力水特广告片', cover: '/video-2.gif', bvid: 'BV13qdmBfEbV' },
          { id: 'ad-2', title: '浪琴手表广告片-韦斯安德森风格', cover: '/video-7.gif', bvid: 'BV1DqdmBZEZZ' }
        ]
      },
      {
        title: '故事片',
        videos: [
          { id: 'story-1', title: '乐高风视频', cover: '/video-3.gif', bvid: 'BV1SzdmB4ERQ' },
          { id: 'story-2', title: '粘土风视频', cover: '/video-4.gif', bvid: 'BV1DqdmBZEZZ' }
        ]
      },
      {
        title: '模版',
        videos: [
          { id: 'temp-1', title: '长视频模版', cover: '/video-5.gif', bvid: 'BV1hqdmBZE11' },
          { id: 'temp-2', title: '营销 Hook 模版', cover: '/video-6.gif', bvid: 'BV1A7dSBnE4E' }
        ]
      }
    ],
    detailImages: [
      '/video-1.gif',
      '/video-2.gif'
    ]
  },
  { 
    id: '04',
    title: '3C 行研 Agent · Demo', 
    client: '独立研发 · Workflow 实验项目',
    role: '2024',
    tags: ['Coze', 'Agent MVP', '行业研究', '自动化'],
    approach: '面向行业研究自动化场景，通过抽象业务节点与配置 Workflow，在 Coze 平台搭建 3C 行研 Agent MVP 版本，实现数据自动获取与报告生成，验证了「LLM + Workflow 替代重复研究工作」的技术可行性。',
    desc: '与业务组共同探索行业研究自动化，通过抽象业务节点与配置Workflow，在Coze平台搭建3C行研Agent MVP版本，实现数据自动获取与报告生成，验证了技术方案的可行性。', 
    highlights: [
      { label: '自动化', sub: '数据 → 报告' },
      { label: 'MVP', sub: '方案验证' },
      { label: 'Workflow', sub: '抽象建模' }
    ],
    imageUrl: '/research-main.png', 
    externalLink: 'https://www.coze.cn/store/agent/7563572605627219977?bot_id=true', 
    detailColor: 'bg-orange-600',
    detailImages: [
      '/research-1.png',
      '/research-2.png'
    ]
  },
  { 
    id: '05',
    title: '基于 LLM 的小红书矩阵号自动化 Chatbot', 
    client: '独立研发 · Vibe Coding Side Project',
    role: '2024.3',
    tags: ['LLM', 'Coze · Workflow', '矩阵号', 'Skill 封装'],
    approach: '针对新媒体高频创作需求搭建 Coze 批量文案 Agent',
    desc: '基于日常运营工作，使用扣子搭建图文类内容生成chatbot，批量生产不同人设、场景、目标用户的运营文案与tag.', 
    highlights: [
      { label: '文案矩阵', sub: '批量产出' },
      { label: '多维适配', sub: '人设/场景' }
    ],
    imageUrl: '/chatbot-main.gif', 
    externalLink: 'https://www.coze.cn/store/agent/7495656188164980755?bot_id=true', 
    detailColor: 'bg-blue-600',
    detailImages: [
      '/chatbot-1.png',
      '/chatbot-2.png'
    ]
  },
];

// --- Decorative Components ---

const FlowerIcon = ({ className, delay = 0, color = "#ffb7d5" }) => (
  <motion.div
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.05, 1],
    }}
    transition={{ 
      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* 6-petaled flower shape */}
      <g transform="translate(50, 50)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <rect
            key={i}
            x="-10"
            y="-35"
            width="20"
            height="40"
            rx="10"
            fill={color}
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Center circle */}
        <circle cx="0" cy="0" r="15" fill={color} />
      </g>
    </svg>
  </motion.div>
);

// --- Components ---

const ProjectItem = ({ project, index, isFullWidth = false }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // 使用 MotionValue 代替 React State 来处理坐标，避免全量重绘
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 使用 Spring 平滑跟随，但参数设为极高以保持灵敏度
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 48); // 48 是鼠标尺寸的一半
    mouseY.set(e.clientY - rect.top - 48);
  };

  return (
    <div 
      className={`group cursor-pointer border-black/5 relative overflow-hidden bg-white ${
        isFullWidth ? 'w-full border-b' : `w-full md:w-1/2 ${index % 2 === 0 ? 'md:border-r' : ''} border-b`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(null)}
      onMouseMove={handleMouseMove}
      onClick={() => {
        if (project.externalLink) {
          window.open(project.externalLink, '_blank');
        } else {
          navigate(`/work/${project.id}`);
        }
      }}
    >
      {/* Project Image Container */}
      <div className={`${isFullWidth ? 'aspect-[21/9]' : 'aspect-[4/3]'} overflow-hidden bg-gray-100 relative cursor-none`}>
        {project.isPlaceholder ? (
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-50 flex flex-col items-center justify-center gap-6 group-hover:from-purple-200 group-hover:to-blue-100 transition-colors duration-700">
            <div className="relative">
              <PlayCircle className="w-24 h-24 text-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-700" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600 animate-pulse" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600/40">Visualizing Intelligence</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-600/20" />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <SmartMedia 
            src={project.imageUrl} 
            alt={project.title}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Heart Cursor Overlay - 直接订阅 MotionValue，不触发组件渲染 */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ 
                x: cursorX, 
                y: cursorY,
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 20
              }}
              transition={{ duration: 0.2 }}
            >
              <HeartCursor className="w-24 h-24" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Project Info Footer */}
      <div className="px-4 md:px-8 py-4 md:py-6 flex items-center justify-between bg-white">
        <span 
          className="text-[10px] font-black uppercase tracking-[0.2em] text-[#165dfc]"
          style={{ fontFamily: '"Lucida Console", Monaco, monospace' }}
        >
          PROJECT {project.id}
        </span>
        <h3 
          className="text-[12px] md:text-[12px] font-medium text-black tracking-tight text-right"
          style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const HomeProjects = () => {
  // Aura项目独占一行，其余4个项目组成2x2网格
  const firstProject = projectsData[0];
  const gridProjects = projectsData.slice(1, 5);

  return (
    <section className="bg-white border-t border-black/5">
      {/* Top Full Width Project */}
      {firstProject && <ProjectItem project={firstProject} isFullWidth={true} />}
      
      {/* Bottom 2x2 Grid */}
      <div className="flex flex-wrap">
        {gridProjects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const LandingPage = ({ onEnter }) => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState([]);

  const handleScreenClick = (e) => {
    // Create confetti particles at click position
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
      rotation: Math.random() * 360,
      color: ['#FFD700', '#FF69B4', '#00CED1', '#98FB98', '#FFA500'][Math.floor(Math.random() * 5)],
      distance: 50 + Math.random() * 100,
      angle: (i / 20) * Math.PI * 2,
      scale: 0.5 + Math.random() * 1
    }));
    
    setConfetti(newParticles);
    
    // Enter after animation
    setTimeout(() => {
      navigate('/');
      onEnter();
    }, 800);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 获取屏幕中心点
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // 计算鼠标相对于中心点的偏移比例 (-1 到 1)
      const moveX = (e.clientX - centerX) / (window.innerWidth / 2);
      const moveY = (e.clientY - centerY) / (window.innerHeight / 2);
      
      setMousePos({ x: moveX, y: moveY });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#016dec] flex items-center justify-center cursor-none overflow-hidden"
      onClick={handleScreenClick}
    >
      {/* Custom Cursor Ball */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full pointer-events-none z-[110]"
        animate={{ x: cursorPos.x - 8, y: cursorPos.y - 8 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />

      {/* Confetti Particles (Full Screen) */}
      <AnimatePresence>
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 0 }}
            animate={{ 
              x: particle.x + Math.cos(particle.angle) * particle.distance,
              y: particle.y + Math.sin(particle.angle) * particle.distance,
              opacity: 0,
              scale: particle.scale,
              rotate: particle.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-2 h-2 pointer-events-none z-[120]"
            style={{ 
              backgroundColor: particle.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              left: 0,
              top: 0
            }}
          />
        ))}
      </AnimatePresence>

      <div className="relative flex flex-col items-center">
        {/* Figma Style Card */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            damping: 20,
            stiffness: 60,
            duration: 1.2,
            delay: 0.3 
          }}
          className="bg-[#F3EFE0] p-6 md:p-8 w-[224px] md:w-[315px] shadow-2xl relative overflow-hidden"
        >
          {/* Eyes Container */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="bg-[#016dec] aspect-square relative flex items-center justify-center p-0"
          >
            <div className="flex w-full px-1">
              {[1, 2].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-[#F3EFE0] w-1/2 aspect-square rounded-full relative overflow-hidden flex items-center justify-center border border-[#016dec]"
                >
                  {/* Pupil */}
                  <motion.div 
                    animate={{ 
                      x: mousePos.x * 20,
                      y: mousePos.y * 20
                    }}
                    transition={{ type: 'spring', damping: 35, stiffness: 250 }}
                    className="bg-black w-[55%] h-[55%] rounded-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="mt-6 md:mt-8 space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-3xl md:text-4xl font-black tracking-tighter text-black"
            >
              Hi! I'm Zoe
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="text-lg md:text-xl font-bold text-black/80"
            >
              A growing AI builder
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="pt-6 md:pt-8 border-t border-black/10 flex justify-between items-end"
            >
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black/40">AI NATIVE · GEN Z</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Greeting Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-12 text-center text-white relative"
        >
          <motion.p 
            whileHover={{ y: -5, scale: 1.05, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-sm md:text-base font-bold opacity-70 flex items-center justify-center gap-2 cursor-pointer"
          >
            Begin here <ArrowRight size={16} />
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// --- Loading & Media Components ---

const LoadingSkeleton = () => (
  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center overflow-hidden">
    <div className="w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Sparkles size={24} className="text-blue-500 animate-pulse" />
      </div>
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    `}} />
  </div>
);

// 智能媒体组件：支持视频首帧自动捕获、底图回退以及平滑切换
const SmartMedia = ({ src, alt, className, containerClassName, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [autoPoster, setAutoPoster] = useState(null);
  const videoRef = useRef(null);
  
  const isVideo = src?.toLowerCase().endsWith('.mp4') || 
                  src?.toLowerCase().endsWith('.webm') || 
                  src?.toLowerCase().endsWith('.mov') || 
                  src?.toLowerCase().endsWith('.qt') || 
                  src?.toLowerCase().endsWith('.ogg');

  // 底图逻辑：尝试寻找对应命名的 jpg
  const posterSrc = src ? src.substring(0, src.lastIndexOf('.')) + '-poster.jpg' : null;

  // 视频首帧自动捕获逻辑 (Auto-Poster)
  useEffect(() => {
    if (isVideo && src) {
      const video = document.createElement('video');
      video.src = src;
      video.crossOrigin = 'anonymous';
      video.currentTime = 0.1; // 捕获 0.1 秒处的帧
      video.muted = true;
      
      video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        try {
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          setAutoPoster(dataUrl);
        } catch (e) {
          console.warn('Failed to capture frame:', e);
        }
      };
    }
  }, [src, isVideo]);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, [isVideo, src]);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden bg-gray-50 ${containerClassName || ''}`} 
      style={style}
    >
      {/* 1. 骨架屏 - 仅在完全没有画面时显示 */}
      {!isLoaded && !autoPoster && !hasError && <LoadingSkeleton />}

      {/* 2. 背景占位：手动准备的底图 或 自动捕获的首帧 */}
      {(posterSrc || autoPoster) && !isLoaded && (
        <img
          src={posterSrc || autoPoster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            if (autoPoster) e.target.src = autoPoster;
            else e.target.style.display = 'none';
          }}
        />
      )}

      {/* 3. 顶层：实际媒体内容 (GIF/Video) */}
      {hasError ? (
        <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center text-gray-300 gap-2 z-20">
          <Zap size={20} />
          <span className="text-[9px] font-black uppercase tracking-widest">Media Error</span>
        </div>
      ) : isVideo ? (
        <video
          ref={videoRef}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full object-cover block transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
          muted
          loop
          playsInline
          src={src}
          {...props}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full object-cover block transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
          {...props}
        />
      )}
    </div>
  );
};

const HeartCursor = ({ className }) => {
  // 定义爱心的像素矩阵 (13x11)
  const grid = [
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 0],
    [1, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  ];

  const colors = {
    1: '#000000', // 黑色边框
    2: '#ffb7b7', // 粉色填充
    3: '#ffffff', // 白色高光
  };

  const pixelSize = 6;

  return (
    <div className={`relative ${className} scale-125 select-none pointer-events-none flex items-center justify-center will-change-transform`}>
      <svg 
        width={13 * pixelSize} 
        height={11 * pixelSize} 
        viewBox={`0 0 ${13 * pixelSize} ${11 * pixelSize}`}
      >
        {grid.map((row, y) => 
          row.map((pixel, x) => {
            if (pixel === 0) return null;
            return (
              <rect
                key={`${x}-${y}`}
                x={x * pixelSize}
                y={y * pixelSize}
                width={pixelSize}
                height={pixelSize}
                fill={colors[pixel]}
              />
            );
          })
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pt-[2px]">
        <span className="text-black font-black text-[10px] uppercase tracking-tighter leading-none">View</span>
      </div>
    </div>
  );
};

const VideoModal = ({ material, isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
      onClick={() => {
        setIsLoaded(false);
        onClose();
      }}
    >
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
        onClick={() => {
          setIsLoaded(false);
          onClose();
        }}
      >
        <X size={40} strokeWidth={1} />
      </button>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full h-full flex items-center justify-center relative"
        onClick={e => e.stopPropagation()}
      >
        {material?.type === 'video' ? (
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            {!isLoaded && (material.bvid || material.src) && <LoadingSkeleton />}
            {material.bvid ? (
              <iframe 
                src={`//player.bilibili.com/player.html?bvid=${material.bvid}&page=1&high_quality=1&danmaku=0`}
                className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                frameBorder="no" 
                scrolling="no" 
                allowFullScreen={true}
                onLoad={() => setIsLoaded(true)}
              />
            ) : material.src ? (
              <video 
                src={material.src}
                controls
                autoPlay
                className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadedData={() => setIsLoaded(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/20 gap-4">
                <PlayCircle size={64} strokeWidth={1} />
                <p className="font-black text-xs uppercase tracking-widest">Video link coming soon</p>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            <img 
              src={material?.src} 
              alt="" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Layout Components ---

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const tabs = [
    { id: '/', label: 'Home', color: 'bg-yellow-400', shape: 'rounded-[65%_35%_65%_35%/35%_65%_35%_65%]' },
    { id: '/work', label: 'Work', color: 'bg-blue-600', shape: 'rounded-none' },
    { id: '/about', label: 'About', color: 'bg-red-600', shape: 'rounded-full' },
  ];

  const activeTab = location.pathname;

  return (
    <nav className="fixed top-0 right-0 z-50 flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => navigate(tab.id)}
          className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-300 hover:scale-105 hover:rotate-45 active:scale-95 ${tab.color} ${tab.shape} ${
            activeTab === tab.id ? 'z-10 shadow-xl scale-110' : 'text-white/90'
          } ${tab.id === '/' ? 'text-black' : 'text-white'}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const AdMaterialCard = ({ material, onPreview }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] border-2 border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all flex flex-col group">
      {/* Media Section */}
      <div 
        className="relative aspect-video bg-gray-100 cursor-pointer overflow-hidden border-b-2 border-black"
        onClick={() => onPreview(material)}
      >
        <SmartMedia 
          src={material.src} 
          alt="" 
          className="group-hover:scale-105 transition-transform duration-700"
        />
        {material.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
              <Play fill="white" size={24} />
            </div>
          </div>
        )}
        {/* Performance Metric Badge */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          {material.spending && (
            <div className="bg-[#0047ff] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border border-white/20 uppercase tracking-widest">
              月日均消耗: {material.spending}
            </div>
          )}
        </div>

        {/* Region Badge */}
        {material.region && (
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-black px-2 py-1 rounded-md border border-white/10 shadow-lg uppercase tracking-tighter">
            地区: {material.region}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        {/* Strategy */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-black text-[#0047ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" /> Strategy
          </h4>
          <p className="text-[13px] font-bold text-black/70 leading-relaxed">
            {material.strategy}
          </p>
        </div>

        {/* Prompt Section - Expandable */}
        <div 
          className="mt-auto pt-4 border-t border-black/5 cursor-pointer"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-[10px] font-black text-black/30 uppercase tracking-widest">
              {material.tool} Prompt
            </h4>
            <div className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {isExpanded ? 'CLOSE' : 'EXPAND'}
            </div>
          </div>
          
          <div className={`relative bg-gray-50 rounded-xl p-3 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-40' : 'max-h-12'}`}>
            <p className="text-[11px] font-mono text-black/50 leading-relaxed break-words">
              {material.prompt}
            </p>
            {!isExpanded && (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <PageTransition>
      <section className="h-[115vh] min-h-[500px] flex flex-col relative bg-white overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="h-[70vh] bg-white" />
          <div className="h-[45vh] bg-[#e6f0ff]" />
        </div>

        <div className="relative z-10 flex-1 px-6 md:px-24">
          {/* Name Section - Aligning bottom with the line */}
          <div className="absolute left-6 md:left-24 top-[70vh] -translate-y-full pb-1">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start"
              >
                <div className="mb-1 md:mb-2 ml-1 md:ml-2 flex items-center gap-4 md:gap-8">
                   <span 
                     className="text-[45px] sm:text-[55px] md:text-[65px] font-black leading-none tracking-tighter text-[#00a73d]"
                     style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
                   >
                     ZOE ZHOU
                   </span>
                   <FlowerIcon className="w-16 h-16 md:w-36 md:h-36 mt-1 md:mt-2" color="#facc15" />
                 </div>

                 <div className="flex items-center gap-4 md:gap-6 leading-[15px] -mt-2 md:-mt-4">
                   <h1 
                     className="text-[80px] sm:text-[100px] md:text-[150px] font-black leading-[0.75] tracking-tighter text-green-600"
                     style={{ fontFamily: 'Arial, sans-serif' }}
                   >
                     周怡沁
                   </h1>
                 </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Slogan Section - Centered between Name and Scroll */}
          <div className="absolute left-6 md:left-[55%] top-[82vh] md:top-[70vh] md:-translate-x-1/2 -translate-y-full pb-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-none text-left"
            >
              <p 
                className="text-[12px] md:text-[16px] font-bold text-black leading-tight mb-1 whitespace-nowrap"
                style={{ fontFamily: '"Lucida Console", Monaco, monospace' }}
              >
                Taste × Shipping Speed = Who I'm Becoming.
              </p>
              <div className="flex gap-2 md:gap-4 text-gray-400 font-black text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase h-4 items-center">
                <span className="flex items-center gap-1 md:gap-2">AI Agents</span>
                <span className="flex items-center gap-1 md:gap-2 border-l border-gray-100 pl-2 md:pl-4">Vibe Coding</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Section - Right aligned */}
          <div className="absolute right-6 md:right-24 top-[90vh] md:top-[70vh] -translate-y-full pb-5">
            <div 
              className="text-black font-black text-[10px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center gap-2 whitespace-nowrap"
              style={{ fontFamily: '"Lucida Console", Monaco, monospace' }}
            >
              Scroll for more <ArrowRight className="rotate-90" size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <ScrollReveal>
        <HomeProjects />
      </ScrollReveal>

      {/* View All Projects CTA - Reference Style */}
      <ScrollReveal>
        <section className="bg-[#facc15] px-0 md:px-0">
          <Link 
            to="/work" 
            className="block w-full bg-[#0047ff] rounded-[3rem] md:rounded-[5rem] py-14 md:py-20 text-center group overflow-hidden relative transition-colors duration-500 hover:bg-[#ff3b30]"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <span className="text-white text-4xl md:text-[8vw] font-black tracking-tighter border-b-4 border-white/30 border-dotted group-hover:border-white transition-all duration-500">
                View all projects
              </span>
            </motion.div>
            {/* Subtle hover effect background */}
            <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </section>
      </ScrollReveal>

      {/* About Summary Section - Reference Style */}
      <ScrollReveal>
        <section className="bg-white py-32 px-6 md:px-12 flex flex-col items-center">
          <div className="w-full max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] flex flex-col items-start">
            <h4 
              className="text-[10px] font-black uppercase tracking-[1px] text-[#000000] mb-8"
              style={{ textAlign: 'left', fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              MILDLY IMPRESSIVE MOMENTS
            </h4>
            <p 
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-black/80 mb-8 md:mb-12 max-w-[850px]"
                style={{ fontSize: '15px', textAlign: 'left' }}
              >
                我曾在 4 家头部企业参加AI相关实习。搭过 Agent、调过 Prompt、跑过 1000+ 条 AI 视频；所在团队的产品冲上过 ProductHunt 日榜 TOP 2；用 Cursor / Claude Code 独立做过AI小程序与可复用 Skill；主导大学生项目为非遗米糕拿过一笔国家级立项基金；还有一支 AI 短片，意外冲进过联通彩铃APP月度订阅榜 TOP 10（真的）。剩下的时间，我在心理学、象棋、陶艺和滑雪里找心流——小小的瞬间，大大的开心。
              </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0px] text-blue-600 hover:text-red-600 hover:gap-4 transition-all"
              style={{ textAlign: 'left', fontFamily: '"Lucida Console", Monaco, monospace' }}
            >
              More about me <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Inspo Loop Section stays on Home */}
      <ScrollReveal>
        <InspoLoop />
      </ScrollReveal>

      {/* Contact Section - Further Shrinked */}
      <ScrollReveal>
        <section className="py-12 px-6 md:px-12 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto w-full text-center">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-[6vw] md:text-[3vw] font-black leading-none tracking-tighter mb-4"
            >
              与我联系<br />
              <span className="text-[3vw] md:text-[1.5vw] italic underline decoration-yellow-400 underline-offset-[4px] md:underline-offset-[6px]">GET IN TOUCH</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 md:mt-10">
              <a href="mailto:15158003276@163.com" className="p-4 md:p-5 rounded-[1rem] md:rounded-[1.2rem] border border-white/20 flex flex-col items-center gap-2 md:gap-3 hover:bg-white/10 transition-all backdrop-blur-lg">
                <Mail size={18} />
                <span className="text-[10px] md:text-[13px] font-black">15158003276@163.com</span>
              </a>
              <a href="https://github.com/Zoe-Zhou-0" target="_blank" className="p-4 md:p-5 rounded-[1rem] md:rounded-[1.2rem] border border-white/20 flex flex-col items-center gap-2 md:gap-3 hover:bg-white/10 transition-all backdrop-blur-lg">
                <Github size={18} />
                <span className="text-[10px] md:text-[13px] font-black">Zoe-Zhou-0</span>
              </a>
              <div className="p-4 md:p-5 rounded-[1rem] md:rounded-[1.2rem] border border-white/20 flex flex-col items-center gap-2 md:gap-3 backdrop-blur-lg">
                <Phone size={18} />
                <span className="text-[10px] md:text-[13px] font-black">15158003276（同微信）</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer Design - Restored from image */}
      <footer className="bg-white pt-32 pb-0">
        <div className="px-6 md:px-12 flex justify-between items-center mb-12">
          {/* Copyright */}
          <div className="text-[10px] md:text-[13px] font-bold text-black">
            © 2026
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1.5 md:gap-3 text-[10px] md:text-[13px] font-bold text-black">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="text-black/20 text-[8px] md:text-[10px]">•</span>
            <Link to="/work" className="hover:text-red-600 transition-colors">Work</Link>
            <span className="text-black/20 text-[8px] md:text-[10px]">•</span>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>

          {/* Name */}
          <div className="text-[10px] md:text-[13px] font-bold text-black uppercase tracking-tight">
            Zoe Zhou
          </div>
        </div>

        {/* Decorative Bottom Shapes */}
        <div className="flex items-end w-full h-[60px] md:h-[90px] overflow-hidden">
          <div className="flex-1 bg-[#facc15] h-[85%] rounded-t-[40px] md:rounded-t-[60px]" />
          <div className="flex-1 bg-[#0047ff] h-full" />
          <div className="flex-1 bg-[#ff3b30] h-full rounded-t-full" />
        </div>
      </footer>
    </PageTransition>
  );
};

const AboutPage = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(-1);
  
  const experiences = [
    { 
      studio: '钛动科技', 
      tag: '出海营销第一梯队',
      tagColor: 'bg-purple-100 text-purple-700',
      role: 'AIGC 产品运营实习生', 
      years: '2026.06 – 至今',
      skills: ['素材制作', '数据复盘', '创意迭代', 'AI 工具链'],
      description: '服务 10+ 个广告主包括 Lazada/Shopee/Trip/Rostics 等，进行投放素材制作、数据复盘与创意迭代，基于消耗等核心数据指标持续优化素材方向，为广告主提供创意优化建议。',
      highlights: [
        { label: '素材产出与迭代', content: '基于广告主投放目标，独立完成短视频/图片素材的创意策略、AI 辅助生成与后期制作，累计产出爆款素材 (日均消耗 >400USD) 30+ 条。' },
        { label: '数据驱动优化', content: '每日跟踪在投素材数据 (消耗/CTR/CVR/ROI等)，对素材进行生命周期管理，归因分析并优化迭代，推动客户 Lazada 素材消耗提升 8%，单月爆款素材数量提升 3 倍。' },
        { label: 'AI 生产', content: '基于洞察方向，运用 AI 工具完成从脚本到成片的全流程制作，并沉淀提示词与方法论，实现可复制、易上手。' }
      ],
      stats: [
        { value: '30+', label: '爆款素材' },
        { value: '+8%', label: '素材消耗提升' },
        { value: '3倍', label: '爆款数量提升' }
      ]
    },
    { 
      studio: '心动电波 · Crepal', 
      tag: 'AI 出海产品 · 垂类第一梯队',
      tagColor: 'bg-green-100 text-green-700',
      role: 'AI 产品经理实习生', 
      years: '2025.11 – 2026.05',
      skills: ['Video Agent', 'Planning 问询', 'UGC 模板', 'Skill 封装'],
      description: '作为产品实习生，独立推动 AI Video Agent 的功能迭代、效果评估与视频模板调优，完成「提需 -> 验收」全流程。',
      highlights: [
        { label: '功能上线', content: '从 0->1 推动 Agent 在 Planning 阶段的「智能问询机制」、模版模块的 UGC 内容制作功能建设等 5+ 产品需求；负责的需求 100% 如期上线。' },
        { label: '模版搭建调优', content: '拆解爆款视频转化为模版，输出结构化 Prompt，并优化提升输出可用率，沉淀 20+ 条视频模版并封装为 Skill。' },
        { label: '质量保障', content: '主导产品的日常评估与发版测试，梳理产品回归上线流程，设计回归测试用例并形成思维导图；同时收集各类共 50+ 用户真实需求输入与业务输入，覆盖 4+ 核心场景，构建测试基准用例库，支持版本迭代的标准化回归测试。' }
      ],
      stats: [
        { value: '100%', label: '如期上线' },
        { value: '20+', label: '视频模版' },
        { value: '5+', label: '产品需求' }
      ]
    },
    { 
      studio: '蓝色光标', 
      tag: '国内营销 TOP 1',
      tagColor: 'bg-blue-100 text-blue-700',
      role: 'AI 产品经理实习生', 
      years: '2025.06 – 2025.09',
      skills: ['AIGC 视频', '信息流广告', 'Prompt 调优', '质量保障'],
      description: '以为主营业务提效为目标，从 0→1 参与信息流广告 AI 视频生成工具的产品设计、Prompt 调优与功能建设。',
      highlights: [
        { label: '效率提升', content: '针对信息流广告「需求量大、重复性高」的痛点，拆解关键提效点并迭代 Prompt，实现 视频可用率 +50%，单视频制作耗时从「小时级」降至「分钟级」，赋能 10+ 业务组，累计交付视频 1000+ 条。' },
        { label: '落地验证', content: '与业务组共同探索行业研究自动化，通过抽象业务节点与配置 Workflow，在 Coze 平台搭建 3C 行研 Agent demo 版本，实现数据自动获取与报告生成，验证了技术方案的可行性。' }
      ],
      stats: [
        { value: '+50%', label: '视频可用率' },
        { value: '1000+', label: '视频交付' },
        { value: '10+', label: '业务组' }
      ]
    },
    { 
      studio: '潮际汇智能科技', 
      tag: 'AI 电商图第一梯队',
      tagColor: 'bg-pink-100 text-pink-700',
      role: 'AI 产品运营实习生', 
      years: '2025.02 – 2025.05',
      skills: ['需求分析', '跨部门沟通', '矩阵运营', '用户增长'],
      description: '参与 AIGC 营销平台的需求分析与产品设计，跨部门沟通产品迭代，制定并落地多平台内容推广策略，驱动用户增长。',
      highlights: [
        { label: '产品推广', content: '基于用户痛点挖掘与竞品分析，制定全平台 5+ 官方号 与 10+ 矩阵号 的内容规划并执行，成功实现产品 UV 增长 5W+。' }
      ],
      stats: [
        { value: '5W+', label: 'UV 增长' },
        { value: '15+', label: '矩阵/官方号' },
        { value: '全平台', label: '内容规划' }
      ]
    },
    { 
      studio: '中文在线集团', 
      tag: '数字内容 TOP 3',
      tagColor: 'bg-yellow-100 text-yellow-700',
      role: 'AIGC 视频剪辑实习生', 
      years: '2024.07 – 2024.09',
      skills: ['AIGC 视频', '中国联通', '脚本 · 素材 · 剪辑'],
      description: '针对中国联通视频彩铃平台，使用 AI 工具独立完成从脚本、素材生成到后期剪辑的全流程 AIGC 短视频制作。',
      highlights: [
        { label: '业务突破', content: '独立产出 AIGC 短视频 20+ 条 并成功投放，其中单条作品为组内唯一获 联通视频彩铃 APP 月度订阅量榜单 TOP 10。' }
      ],
      stats: [
        { value: '20+', label: 'AIGC 短视频' },
        { value: 'TOP 10', label: '月度订阅榜' }
      ]
    },
  ];

  const strengths = [
    { title: 'AI 实践', content: '具有垂类行业 TOP1 企业的 AI 产品经理实习经历，包括 AI Video Agent、4A 广告、数字内容版权等。' },
    { title: '产品能力', content: '具有使用 Cursor 独立完成“需求构思 - Demo 验证”闭环的落地实操能力，输出 PRD 和可交互 html 设计图、优化 prompt 改善 Agent 输出效果等能力，所在团队产品曾获 ProductHunt 日榜 TOP2，能够使用 Vibe coding 从 0-1 搭建小程序。' },
    { title: '目标导向', content: '主动出击，跨界寻找机遇，锻炼了发现问题→识别问题→定义问题→解决问题的产品思维，储备 AI 产品领域的实践经验。' },
    { title: '用户思维', content: '具有良好的与上下游合作的客户视角，拥有情绪与事实课题分离的协作意识，实现项目目标共赢的思维。' },
    { title: '创新思维', content: '具有研究用户的思维习惯，利用业余时间研发 Vibe coding 产品，从 0 到 1 搭建了 Aura 小程序、小红书矩阵 & 视频模板 Skill。' },
    { title: '创造思维', content: '关注心理学领域，沉浸式爱好象棋、漫画、滑雪、手工陶艺等，让自己能够进入专注的心流状态，提升个人创造力。' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white selection:bg-[#0047ff] selection:text-white">
        {/* About Hero */}
        <div className="h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-2 relative bg-white overflow-hidden">
          <div className="absolute bottom-2 right-4 md:right-12 w-40 h-56 md:w-64 md:h-84 overflow-hidden z-10 bg-gray-100 flex items-center justify-center border border-black/5">
             <SafeImage 
               src="/about-me.png" // 改为读取 public/about-me.png
               alt="Zoe Zhou" 
               className="object-top"
             />
             <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
          <h1 className="text-[80px] md:text-[120px] font-black leading-none tracking-tighter text-[#0047ff] drop-shadow-sm mb-2 relative z-20">
             About
           </h1>
        </div>

        {/* Content Section - Beige Background */}
        <div className="bg-[#fffdf0] py-16 px-4 md:px-12 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
            {/* Bio section */}
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl font-bold leading-relaxed text-[#4a3728]">
                  嗨，我是 周怡沁 / Zoe。<br />
                  一个正在 AI 产品世界里发芽的产品经理。
                </p>
              </div>
            </ScrollReveal>

            {/* Strengths Section - Moved to top, Updated with new content */}
            <ScrollReveal>
              <div className="w-full">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0047ff]/40 mb-6">个人优势 / Strengths</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                  {strengths.map((s, i) => (
                    <div key={i} className="group border-t border-[#4a3728]/10 pt-6">
                      <div className="text-base font-black mb-2 flex items-center gap-3 text-[#4a3728]">
                        <span className="w-2 h-2 rounded-full bg-[#0047ff]" />
                        {s.title}
                      </div>
                      <p className="text-[13px] text-[#4a3728]/60 font-medium leading-relaxed">{s.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Experience Section - Now after Strengths */}
            <ScrollReveal>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-8 md:mb-12">
                  <h2 className="text-5xl md:text-8xl font-black text-[#0047ff] tracking-tighter">
                    Experience
                  </h2>
                  <div className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full border border-black/5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-[#4a3728]/60">点击任一段 ↓ 展开查看具体工作内容</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <motion.div 
                      key={i}
                      layout
                      initial={false}
                      className={`bg-white rounded-[2rem] border-2 transition-all duration-500 overflow-hidden ${
                        expandedIndex === i ? 'border-[#0047ff] shadow-xl' : 'border-black/5 hover:border-[#0047ff]/30'
                      }`}
                    >
                      {/* Header */}
                      <button 
                        onClick={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
                        className="w-full text-left px-5 md:px-8 py-6 md:py-10 flex justify-between items-start group"
                      >
                        <div className="flex flex-col gap-3 md:gap-4">
                          <div className="flex flex-wrap items-center gap-2 md:gap-4">
                            <h3 className="text-xl md:text-2xl font-black text-[#4a3728]">{exp.studio}</h3>
                            <span className={`text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-wider ${exp.tagColor}`}>
                              {exp.tag}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="text-lg font-bold text-[#4a3728]/80">{exp.role}</div>
                            <div className="text-sm font-mono text-[#4a3728]/40 tracking-tighter">{exp.years}</div>
                          </div>
                        </div>
                        
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          expandedIndex === i ? 'bg-[#0047ff] text-white rotate-45' : 'bg-blue-50 text-[#0047ff] group-hover:bg-blue-100'
                        }`}>
                          <Zap size={20} fill={expandedIndex === i ? "white" : "none"} />
                        </div>
                      </button>

                      {/* Content */}
                      <AnimatePresence>
                        {expandedIndex === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-5 md:px-8 pb-8 md:pb-12 pt-4 border-t border-black/5">
                              <div className="max-w-4xl space-y-12">
                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill, si) => (
                                    <span key={si} className="text-[11px] font-bold px-4 py-1.5 bg-yellow-50 text-[#4a3728] border border-yellow-200/50 rounded-full">
                                      {skill}
                                    </span>
                                  ))}
                                </div>

                                {/* Description */}
                                <div className="flex gap-4">
                                  <div className="w-1.5 h-auto bg-green-500 rounded-full shrink-0" />
                                  <p className="text-lg font-bold leading-relaxed text-[#4a3728]/90 italic">
                                    {exp.description}
                                  </p>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-8">
                                  {exp.highlights.map((item, hi) => (
                                    <div key={hi} className="relative pl-6">
                                      <Sparkles className="absolute left-0 top-1 text-blue-500" size={16} />
                                      <div className="space-y-2">
                                        <span className="text-base font-black text-[#4a3728] border-b-2 border-blue-100">{item.label}：</span>
                                        <p className="text-sm font-medium text-[#4a3728]/70 leading-relaxed">{item.content}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                  {exp.stats.map((stat, sti) => (
                                    <div key={stat.label} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 flex flex-col gap-1">
                                      <div className="text-3xl font-black text-[#0047ff] tracking-tighter">{stat.value}</div>
                                      <div className="text-[10px] font-bold text-[#4a3728]/40 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Services, Tools, Vibe Section */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Services Card */}
                <div className="bg-white rounded-[1.5rem] border-2 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">SERVICES</span>
                    <span className="text-blue-600 font-bold text-[10px]">/ 能做</span>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "AI产品设计",
                      "Prompt 工程与效果评估",
                      "Agent工作流搭建",
                      "Vibe Coding · MVP 开发",
                      "视频模版与内容策略"
                    ].map((item, idx) => (
                      <li key={idx} className={`pb-3 ${idx !== 4 ? 'border-b border-dashed border-black/10' : ''} text-[13px] font-bold text-[#4a3728]`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Card */}
                <div className="bg-white rounded-[1.5rem] border-2 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">TOOLS</span>
                    <span className="text-blue-600 font-bold text-[10px]">/ 在用</span>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "Cursor · Claude Code",
                      "Coze",
                      "Figma · 墨刀",
                      "Python · SPSS · Tableau",
                      "Pr / AE / PS / 剪映"
                    ].map((item, idx) => (
                      <li key={idx} className={`pb-3 ${idx !== 4 ? 'border-b border-dashed border-black/10' : ''} text-[13px] font-bold text-[#4a3728]`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vibe Card */}
                <div className="bg-white rounded-[1.5rem] border-2 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">VIBE</span>
                    <span className="text-blue-600 font-bold text-[10px]">/ 热爱</span>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "心理学 · 能量疗愈",
                      "象棋 · 省级象棋士",
                      "漫画 · 滑雪 · 陶艺",
                      "拼贴美学 · 色彩实验",
                      "把灵感变成 Demo"
                    ].map((item, idx) => (
                      <li key={idx} className={`pb-3 ${idx !== 4 ? 'border-b border-dashed border-black/10' : ''} text-[13px] font-bold text-[#4a3728]`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Education Section */}
            <ScrollReveal>
              <div className="w-full space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-5xl md:text-8xl font-black text-[#0047ff] tracking-tighter">
                    Education
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-[1.5rem] border-2 border-black p-6 relative overflow-hidden group">
                    <div className="relative z-10 space-y-2">
                      <h3 className="text-xl font-black text-[#4a3728]">浙江传媒学院</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-bold text-[#4a3728]/80">新闻与传播（专硕）</span>
                        <span className="bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded">学科 TOP 2</span>
                      </div>
                      <div className="text-xs font-mono text-[#4a3728]/40">2024.9 – 2027.6</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[1.5rem] border-2 border-black p-6 relative overflow-hidden group">
                    <div className="relative z-10 space-y-2">
                      <h3 className="text-xl font-black text-[#4a3728]">浙江万里学院</h3>
                      <div className="text-base font-bold text-[#4a3728]/80">广告学（本科）</div>
                      <div className="text-xs font-mono text-[#4a3728]/40">2019.9 – 2024.6</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Awards & Honors Section */}
            <ScrollReveal>
              <div className="w-full space-y-12">
                <h2 className="text-5xl md:text-8xl font-black text-[#0047ff] tracking-tighter">
                  Awards & Honors
                </h2>
                
                <div className="space-y-4">
                  {[
                    { year: '2025.3', content: '全国大学生广告艺术大赛 · 游戏 UI 类省级三等奖 (约前 15%)' },
                    { year: '2024.3', content: '全国大学生广告艺术节学院奖 · 产品包装类全国铜奖 (约前 0.3%)' },
                    { year: '2023.7', content: '全国大学生创新创业训练项目 · 国家级立项 (约前 20%)' }
                  ].map((award, idx) => (
                    <div key={idx} className="bg-white rounded-[1.5rem] border-2 border-dotted border-black/10 p-6 flex items-center gap-6">
                      <span className="bg-red-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full shrink-0">
                        {award.year}
                      </span>
                      <p className="text-base font-bold text-[#4a3728]">{award.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const WorkPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#dbeafe] text-black selection:bg-[#ff3b30] selection:text-white">
        {/* Header Section - Positioned at bottom to match About page */}
        <div className="h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-2 relative overflow-hidden">
          <div className="relative inline-block mb-2">
              <h1 className="text-[70px] md:text-[130px] font-black leading-[65px] md:leading-[125px] tracking-[-2px] md:tracking-[-4px] text-[#ff3b30]">
                Portfolio
              </h1>
            </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-b border-black/10">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id}>
              <div className="border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden group lg:h-[550px]">
                {/* Left Content - White Background */}
                <div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-12 bg-white">
                  <div className="flex justify-between items-end w-full mb-8 md:mb-12">
                    <span 
                       className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 text-black mb-[2px]"
                       style={{ fontFamily: '"Lucida Console", Monaco, monospace', letterSpacing: '1px' }}
                     >
                       Project {project.id}
                     </span>
                     <h3 
                        className="text-[12px] font-medium tracking-tight text-black text-right"
                        style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
                      >
                       {project.title}
                     </h3>
                  </div>
                
                  <div className="mt-auto">
                    <p 
                         className="text-[13px] font-bold leading-[21px] text-black mb-8 whitespace-pre-wrap"
                         style={{ fontFamily: '"Lucida Console", Monaco, monospace' }}
                       >
                        {project.desc}
                      </p>
                    <button 
                      onClick={() => {
                        if (project.externalLink) {
                          window.open(project.externalLink, '_blank');
                        } else {
                          navigate(`/work/${project.id}`);
                        }
                      }}
                      className="inline-flex items-center gap-2 text-[12px] font-black uppercase text-blue-600 hover:text-red-600 hover:gap-4 transition-all"
                      style={{ 
                        fontFamily: '"Lucida Console", Monaco, monospace', 
                        letterSpacing: '0px',
                        lineHeight: '20px',
                        borderWidth: '0px',
                        borderStyle: 'solid',
                        borderColor: '#000000'
                      }}
                    >
                      View case study <ArrowRight size={14} />
                    </button>
                  </div>
              </div>

              {/* Right Image - Flush with borders */}
              <div 
                className="lg:col-span-8 relative cursor-none group overflow-hidden lg:border-l border-black/10 h-[400px] lg:h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
                onClick={() => {
                  if (project.externalLink) {
                    window.open(project.externalLink, '_blank');
                  } else {
                    navigate(`/work/${project.id}`);
                  }
                }}
              >
                <div className="w-full h-full overflow-hidden bg-gray-200">
                  {project.isPlaceholder ? (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-50 flex flex-col items-center justify-center gap-6 group-hover:from-purple-200 group-hover:to-blue-100 transition-colors duration-700">
                      <div className="relative">
                        <PlayCircle className="w-24 h-24 text-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-700" strokeWidth={1} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-purple-600 animate-pulse" fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600/40">Visualizing Intelligence</span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-600/20" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <SmartMedia 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>
                
                {/* View Icon Overlay - Follows mouse with spring physics */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0, x: mousePos.x - 48, y: mousePos.y - 48 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        x: mousePos.x - 48,
                        y: mousePos.y - 48,
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        type: 'spring', 
                        damping: 25, 
                        stiffness: 250, 
                        mass: 0.5,
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute top-0 left-0 pointer-events-none z-20"
                    >
                      <HeartCursor className="w-24 h-24" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  if (!project) return <div>Project not found</div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-black">
        <VideoModal 
          isOpen={!!selectedMaterial} 
          material={selectedMaterial} 
          onClose={() => setSelectedMaterial(null)} 
        />
        
        {/* Top Banner Area - Support Video or GIF Background */}
        <div className={`h-[60vh] md:h-[70vh] ${project.detailColor} relative flex flex-col justify-end px-4 md:px-12 pb-16 overflow-hidden`}>
          {/* Media Background Logic (Overrides solid color) */}
          {(project.bgImageUrl || project.videoUrl) && (
            <SmartMedia 
              src={project.bgImageUrl || project.videoUrl} 
              alt="" 
              containerClassName={`absolute inset-0 z-0 ${project.detailColor}`}
              style={{ opacity: 1 }} 
            />
          )}

          {/* Overlay to ensure text readability if needed */}
          {(project.bgImageUrl || project.videoUrl) && (
            <div className="absolute inset-0 bg-black/20 z-[1]" />
          )}

          <button 
            onClick={() => navigate('/work')}
            className="absolute top-32 left-4 md:left-12 flex items-center gap-2 text-white/80 hover:text-white font-bold transition-colors z-20"
          >
            <ArrowLeft size={20} /> Back to projects
          </button>
          
          <div className="relative z-10 space-y-6">
            {project.tags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-black px-4 py-1.5 bg-white/20 backdrop-blur text-white border border-white/30 rounded-full uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[10vw] md:text-[8vw] font-black text-white/90 leading-none tracking-tighter"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>

        {/* Project Info Section - Added back the missing section */}
        {(project.approach || project.qrCodeUrl) && (
          <ScrollReveal>
            <div className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-b border-black/5 flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="max-w-2xl space-y-12">
                {/* Approach Section */}
                {project.approach && (
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">ART DIRECTION & APPROACH</h4>
                    <p className="text-lg font-medium leading-relaxed text-black/60">
                      {project.approach}
                    </p>
                  </div>
                )}
              </div>

              {/* QR Code Section */}
              {project.qrCodeUrl && (
                <div className="shrink-0 bg-white p-4 rounded-3xl border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center gap-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative">
                    <SmartMedia src={project.qrCodeUrl} alt="Experience App" className="w-full h-full" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">EXPERIENCE APP</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* Video Grid Section */}
        <div className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
          {project.showcaseType === 'mockups' ? (
            /* Mockup Scattered Showcase - Optimized to be smaller and fully contained */
            <div className="relative bg-[#dcf0ff] rounded-[3rem] p-4 md:p-12 overflow-hidden min-h-[500px] md:min-h-[650px] flex items-center justify-center">
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 relative z-10 w-full max-w-5xl scale-90 md:scale-100">
                {project.mockups.map((img, i) => {
                  // Define specific offsets only (removed rotation for upright look)
                  const styles = [
                    { y: '10%', scale: 0.95 }, 
                    { y: '-5%', scale: 1 },    
                    { y: '5%', scale: 1 },  
                    { y: '-10%', scale: 1 },     
                    { y: '15%', scale: 0.95 }, 
                  ];
                  const currentStyle = styles[i % styles.length];

                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: currentStyle.y, 
                        rotate: 0, // Force upright
                        scale: currentStyle.scale 
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: i * 0.1, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="w-[160px] sm:w-[180px] md:w-[200px] aspect-[9/19] bg-white rounded-[1.8rem] border-[4px] border-black shadow-[0_15px_30px_rgba(0,0,0,0.1)] overflow-hidden relative shrink-0"
                    >
                      {/* Phone top bar mockup */}
                      <div className="absolute top-0 left-0 w-full h-5 bg-white flex justify-center items-center gap-1 z-20">
                        <div className="w-10 h-1 bg-black/5 rounded-full" />
                      </div>
                      
                      <SmartMedia src={img} alt="" className="pt-5" />
                      
                      {/* Special Preview Button on the last visible screen */}
                      {i === 4 && (
                        <div className="absolute bottom-6 left-0 w-full px-4 z-30">
                          <div className="bg-black/90 text-white p-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] shadow-xl backdrop-blur-sm border border-white/10">
                            <ExternalLink size={14} />
                            Preview
                          </div>
                        </div>
                      )}

                      {/* Mockup Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Background Decorative Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-blue-600/5 select-none pointer-events-none uppercase tracking-tighter">
                App
              </div>
            </div>
          ) : project.showcaseType === 'ad-portfolio' ? (
            /* Ad Portfolio Showcase Grid */
            <div className="space-y-24">
              {project.campaigns.map((campaign, idx) => (
                <div key={idx} className="space-y-12">
                  {/* Campaign Header & Stats */}
                  <div className="bg-[#f8f9fa] rounded-[3rem] p-8 md:p-12 border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b-2 border-black/10 pb-8 mb-8">
                      <div className="flex items-center gap-6">
                        {/* Logo Placeholder */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border-2 border-black/5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                          {campaign.logo ? (
                            <SmartMedia src={campaign.logo} alt={campaign.client} className="w-full h-full object-contain p-2" />
                          ) : (
                            <span className="text-[10px] font-black text-black/20 uppercase tracking-tighter">LOGO</span>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase">{campaign.client}</h2>
                          </div>
                          <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Campaign Case</h4>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 md:gap-12">
                        {campaign.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-black text-blue-600 tracking-tighter">{stat.value}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/30">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Materials Grid - Categorized */}
                    <div className="space-y-12">
                      {/* Banner Section */}
                      {campaign.materials.some(m => m.type === 'banner') && (
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 mb-6 flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-blue-600/20" />
                            Banner Materials
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {campaign.materials.filter(m => m.type === 'banner').map((material, i) => (
                              <AdMaterialCard 
                                key={`banner-${i}`} 
                                material={material} 
                                onPreview={(m) => setSelectedMaterial(m)}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Video Section */}
                      {campaign.materials.some(m => m.type === 'video') && (
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 mb-6 flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-red-600/20" />
                            Video Materials
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {campaign.materials.filter(m => m.type === 'video').map((material, i) => (
                              <AdMaterialCard 
                                key={`video-${i}`} 
                                material={material} 
                                onPreview={(m) => setSelectedMaterial(m)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : project.showcaseType === 'video-grid' ? (
            /* Video Works Grid - Categorized Section */
            <div className="space-y-32">
              {project.videoCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-12">
                  <div className="flex items-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black/90 whitespace-nowrap">
                      {category.title}
                    </h2>
                    <div className="h-1 flex-grow bg-black/5 rounded-full" />
                    <span className="text-[10px] font-black text-black/30 tracking-[0.3em] uppercase">
                      {category.videos.length} Works
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.videos.map((video, i) => (
                      <motion.div 
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <div className="aspect-video rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 bg-gray-100 relative">
                          <SmartMedia 
                            src={video.cover} 
                            alt={video.title} 
                            className="group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                              <Play fill="white" size={24} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-between items-center px-2">
                          <h3 className="font-black text-xl uppercase tracking-tighter">{video.title}</h3>
                          <span className="text-[10px] font-black px-3 py-1 bg-black text-white rounded-full">WATCH</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Default Image List Layout */
            <div className="space-y-12 md:space-y-24">
              {project.detailImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full aspect-video md:aspect-[21/9] overflow-hidden bg-gray-100 rounded-lg md:rounded-2xl"
                >
                  <SmartMedia src={img} alt="" />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <ScrollReveal>
          <div className="py-24 px-4 md:px-12 border-t border-black/5 flex justify-center">
            <button 
              onClick={() => navigate('/work')}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowLeft size={32} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Next Project</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

const InspoLoop = () => {
  const images = [
    { base: '/inspo-1', id: 'Dreamy' },
    { base: '/inspo-2', id: 'Tech' },
    { base: '/inspo-3', id: 'Fresh' },
    { base: '/inspo-4', id: 'Digital' },
    { base: '/inspo-5', id: 'Vibrant' },
    { base: '/inspo-6', id: 'Future' },
  ];

  const loopImages = [...images, ...images];

  // 内部组件：自动尝试不同后缀名
  const AdaptiveImage = ({ base, alt, className }) => {
    const extensions = ['.webp', '.gif', '.jpg', '.png', '.jpeg'];
    const [extIndex, setExtIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
      <div className={`relative w-full h-full overflow-hidden bg-gray-100 ${className}`}>
        {!isLoaded && !hasError && <LoadingSkeleton />}
        {hasError && (
          <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center text-gray-300 gap-2">
            <Zap size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">Media Error</span>
          </div>
        )}
        <img 
          src={`${base}${extensions[extIndex]}`}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (extIndex < extensions.length - 1) {
              setExtIndex(extIndex + 1);
            } else {
              setHasError(true);
            }
          }}
        />
      </div>
    );
  };

  return (
    <section className="pt-12 pb-24 bg-[#e6f0ff] overflow-hidden border-y-[0px] border-solid border-black">
      <div className="px-6 md:px-24 mb-8 md:mb-12 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black text-[#1e40af] tracking-tighter">
          Inspo loop
        </h2>
      </div>
      
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 md:gap-8 px-2 md:px-4 shrink-0"
        >
          {loopImages.map((img, i) => (
            <div
              key={i}
              className="w-64 md:w-80 aspect-[4/3] rounded-lg md:rounded-2xl overflow-hidden relative group shrink-0"
            >
              <AdaptiveImage 
                base={img.base} 
                alt={img.id}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- Main App ---

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <Router>
      <div className="font-sans text-black bg-white selection:bg-yellow-400 selection:text-black">
        <ScrollToTop />
        
        <AnimatePresence mode="wait">
          {showLanding ? (
            <LandingPage key="landing" onEnter={() => setShowLanding(false)} />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/work/:id" element={<ProjectDetailPage />} />
                </Routes>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <style dangerouslySetInnerHTML={{ __html: `
          .outline-text {
            -webkit-text-stroke: 2px #f3f4f6;
            text-stroke: 2px #f3f4f6;
            color: transparent;
          }
          @media (max-width: 768px) {
            .outline-text {
              -webkit-text-stroke: 1px #f3f4f6;
              text-stroke: 1px #f3f4f6;
            }
          }
        `}} />
      </div>
    </Router>
  );
}
