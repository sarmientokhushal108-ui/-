const modules = [
  {
    title: "客户管理",
    eyebrow: "CRM",
    description: "集中管理客户线索、跟进记录、成交阶段和下一步行动，避免重要机会遗漏。",
    metrics: "12 个重点客户",
    status: "3 个今日待跟进",
    tasks: ["筛选高意向客户", "更新沟通纪要", "设置下次跟进提醒"],
  },
  {
    title: "项目管理",
    eyebrow: "Projects",
    description: "把目标拆成项目、里程碑和任务，清楚看到每个事项的负责人、截止时间和进度。",
    metrics: "5 个进行中项目",
    status: "2 个高优先级",
    tasks: ["确认本周里程碑", "拆解交付清单", "同步风险与阻塞"],
  },
  {
    title: "销售复盘",
    eyebrow: "Sales Review",
    description: "复盘销售过程、客户异议、报价策略和转化结果，形成可复用的话术与策略。",
    metrics: "本周复盘 4 次",
    status: "沉淀 6 条话术",
    tasks: ["整理赢单原因", "记录流失原因", "提炼异议处理模板"],
  },
  {
    title: "雅思学习",
    eyebrow: "IELTS",
    description: "围绕听说读写规划每日学习任务，记录分数目标、练习结果和薄弱项。",
    metrics: "目标 7.0+",
    status: "口语优先突破",
    tasks: ["听力精听 30 分钟", "口语 Part 2 练习", "阅读错题复盘"],
  },
  {
    title: "金融学习",
    eyebrow: "Finance",
    description: "跟踪宏观、行业、公司和投资概念学习，建立自己的金融知识卡片库。",
    metrics: "36 张知识卡片",
    status: "今日学习宏观流动性",
    tasks: ["阅读财经新闻", "记录一个金融概念", "复盘一个行业案例"],
  },
  {
    title: "穿搭内容管理",
    eyebrow: "Outfit Content",
    description: "管理穿搭选题、素材、脚本、剪辑状态、发布排期和内容数据表现。",
    metrics: "8 条内容待制作",
    status: "2 条进入剪辑",
    tasks: ["整理穿搭选题", "剪辑短视频素材", "更新发布排期"],
  },
];

const todayFocus = ["客户跟进", "项目交付", "雅思口语", "金融笔记", "穿搭视频剪辑"];

const operatingRhythm = [
  { time: "09:00", title: "计划", text: "确定今日最重要的 3 件事，并拆成可完成动作。" },
  { time: "13:30", title: "推进", text: "处理客户、项目和内容制作中的高优先级任务。" },
  { time: "20:30", title: "学习", text: "完成雅思与金融输入，沉淀笔记或口语录音。" },
  { time: "22:30", title: "复盘", text: "记录销售复盘、项目进度和明日行动建议。" },
];

const databaseTables = [
  "customers",
  "projects",
  "sales_reviews",
  "ielts_logs",
  "finance_notes",
  "outfit_contents",
];

export default function Home() {
  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Flora Personal OS</p>
          <h1>个人成长与业务管理 Dashboard</h1>
          <p className="hero-description">
            一个统一入口，集中管理客户、项目、销售复盘、雅思学习、金融学习和穿搭内容生产，让每天的行动更清晰。
          </p>
          <div className="hero-actions">
            <a href="#modules" className="primary-action">查看工作模块</a>
            <a href="#rhythm" className="secondary-action">查看执行节奏</a>
          </div>
        </div>
        <aside className="summary-card" aria-label="今日概览">
          <span>今日系统</span>
          <strong>6</strong>
          <p>核心模块在线</p>
        </aside>
      </section>

      <section id="today" className="today-panel" aria-labelledby="today-title">
        <div>
          <p className="eyebrow">Today Focus</p>
          <h2 id="today-title">今日重点</h2>
        </div>
        <div className="focus-list">
          {todayFocus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="modules" className="module-grid" aria-label="Dashboard 功能模块">
        {modules.map((module) => (
          <article className="module-card" key={module.title}>
            <div className="module-header">
              <span>{module.eyebrow}</span>
              <strong>{module.metrics}</strong>
            </div>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
            <div className="module-status">{module.status}</div>
            <ul>
              {module.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="rhythm" className="workspace-grid" aria-label="执行节奏和数据结构">
        <article className="rhythm-panel">
          <p className="eyebrow">Operating Rhythm</p>
          <h2>每日执行节奏</h2>
          <div className="timeline">
            {operatingRhythm.map((item) => (
              <div className="timeline-item" key={item.time}>
                <time>{item.time}</time>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="database-panel">
          <p className="eyebrow">Database Ready</p>
          <h2>后续可落库结构</h2>
          <p>当前首页先完成信息架构，下一步可接入 Supabase、PostgreSQL 或自建 API。</p>
          <div className="table-list">
            {databaseTables.map((table) => (
              <code key={table}>{table}</code>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
