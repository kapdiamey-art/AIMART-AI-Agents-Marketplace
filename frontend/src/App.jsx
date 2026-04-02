import { useState } from 'react';
import { 
  Search, 
  Plus, 
  LayoutGrid, 
  Box, 
  BarChart2, 
  Settings, 
  Bell, 
  TrendingUp,
  Users,
  Activity,
  DollarSign,
  Download,
  Star
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import './index.css';

const ANALYTICS_DATA = [
  { name: 'Jan', usage: 4000, revenue: 2400 },
  { name: 'Feb', usage: 3000, revenue: 1398 },
  { name: 'Mar', usage: 2000, revenue: 9800 },
  { name: 'Apr', usage: 2780, revenue: 3908 },
  { name: 'May', usage: 1890, revenue: 4800 },
  { name: 'Jun', usage: 2390, revenue: 3800 },
  { name: 'Jul', usage: 3490, revenue: 4300 },
];

const PIE_DATA = [
  { name: 'CodeReview Pro', value: 400 },
  { name: 'DataSynth Vision', value: 300 },
  { name: 'CopyWriter AI', value: 300 },
  { name: 'Other', value: 200 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const DUMMY_AGENTS = [
  {
    id: 1,
    name: 'CodeReview Pro',
    author: 'DevTools Inc.',
    category: 'Development',
    description: 'An intelligent agent that reviews pull requests, suggests optimizations, and enforces coding standards automatically.',
    price: '$15/mo',
    rating: 4.9,
    installs: '12k+',
    icon: '💻'
  },
  {
    id: 2,
    name: 'DataSynth Vision',
    author: 'AI Analytics',
    category: 'Data Science',
    description: 'Generates synthetic datasets with realistic distributions for training machine learning models without privacy concerns.',
    price: '$49/mo',
    rating: 4.7,
    installs: '3.4k+',
    icon: '📊'
  },
  {
    id: 3,
    name: 'CopyWriter AI',
    author: 'CreativeMinds',
    category: 'Marketing',
    description: 'Creates marketing copy, blog posts, and SEO-optimized content based on simple prompts and brand guidelines.',
    price: 'Free',
    rating: 4.5,
    installs: '50k+',
    icon: '✍️'
  },
  {
    id: 4,
    name: 'DevOps AutoScaler',
    author: 'CloudOps',
    category: 'Infrastructure',
    description: 'Monitors server load and automatically scales Kubernetes clusters or cloud instances predicting traffic spikes.',
    price: '$99/mo',
    rating: 4.8,
    installs: '1.2k+',
    icon: '☁️'
  },
  {
    id: 5,
    name: 'SupportBot Plus',
    author: 'HelpDesk AI',
    category: 'Customer Success',
    description: 'Handles tier-1 customer support tickets by learning from past interactions and referencing company documentation.',
    price: '$29/mo',
    rating: 4.6,
    installs: '8.5k+',
    icon: '🎧'
  },
  {
    id: 6,
    name: 'DesignGen',
    author: 'StudioAI',
    category: 'Design',
    description: 'Generates UI mockups and design systems from text descriptions. Export directly to Figma or React code.',
    price: '$35/mo',
    rating: 4.9,
    installs: '22k+',
    icon: '🎨'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Development', 'Data Science', 'Marketing', 'Design'];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="content-scroll">
            <div className="page-header">
              <h1 className="page-title">Overview Dashboard</h1>
              <p className="page-subtitle">Welcome back, Developer. Here's what's happening with your agents today.</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">
                  Total Active Agents
                  <div className="stat-icon-wrapper"><Box size={16} /></div>
                </div>
                <div className="stat-value">24</div>
                <div className="stat-change change-positive">
                  <TrendingUp size={14} /> +12% from last month
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-title">
                  Total API Calls
                  <div className="stat-icon-wrapper"><Activity size={16} /></div>
                </div>
                <div className="stat-value">1.4M</div>
                <div className="stat-change change-positive">
                  <TrendingUp size={14} /> +8% from last month
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-title">
                  Total Installs
                  <div className="stat-icon-wrapper"><Download size={16} /></div>
                </div>
                <div className="stat-value">3,542</div>
                <div className="stat-change change-positive">
                  <TrendingUp size={14} /> +24% from last month
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-title">
                  Revenue
                  <div className="stat-icon-wrapper"><DollarSign size={16} /></div>
                </div>
                <div className="stat-value">$1,240</div>
                <div className="stat-change change-negative">
                  <TrendingUp size={14} style={{transform: 'rotate(180deg)'}}/> -2% from last month
                </div>
              </div>
            </div>

            <h2 className="page-title" style={{fontSize: '1.25rem', marginBottom: '1.5rem'}}>Top Performing Agents</h2>
            <div className="marketplace-grid">
              {DUMMY_AGENTS.slice(0, 3).map(agent => (
                <div className="agent-card" key={agent.id}>
                  <div className="agent-header">
                    <div className="agent-icon">{agent.icon}</div>
                    <div className="agent-info">
                      <div className="agent-info-top">
                        <div className="agent-name">{agent.name}</div>
                        <div className="agent-badge">{agent.category}</div>
                      </div>
                      <div className="agent-author">by {agent.author}</div>
                    </div>
                  </div>
                  <p className="agent-desc">{agent.description}</p>
                  <div className="agent-footer">
                    <div className="agent-stats">
                      <div className="stat-item"><Star size={14} /> {agent.rating}</div>
                      <div className="stat-item"><Users size={14} /> {agent.installs}</div>
                    </div>
                    <div className="agent-price">{agent.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'marketplace':
        const filteredAgents = activeFilter === 'All' 
          ? DUMMY_AGENTS 
          : DUMMY_AGENTS.filter(a => a.category === activeFilter);

        return (
          <div className="content-scroll">
            <div className="page-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div>
                <h1 className="page-title">Discover Agents</h1>
                <p className="page-subtitle">Browse and deploy state-of-the-art AI agents for your workflow.</p>
              </div>
              <div className="search-bar" style={{background: 'rgba(255,255,255,0.05)'}}>
                <Search size={18} color="var(--text-secondary)" />
                <input type="text" className="search-input" placeholder="Search agents, categories..." />
              </div>
            </div>

            <div className="marketplace-filter">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="marketplace-grid">
              {filteredAgents.map(agent => (
                <div className="agent-card" key={agent.id}>
                  <div className="agent-header">
                    <div className="agent-icon">{agent.icon}</div>
                    <div className="agent-info">
                      <div className="agent-info-top">
                        <div className="agent-name">{agent.name}</div>
                        <div className="agent-badge">{agent.category}</div>
                      </div>
                      <div className="agent-author">by {agent.author}</div>
                    </div>
                  </div>
                  <p className="agent-desc">{agent.description}</p>
                  <div className="agent-footer">
                    <div className="agent-stats">
                      <div className="stat-item"><Star size={14} className="text-warning"/> {agent.rating}</div>
                      <div className="stat-item"><Users size={14} /> {agent.installs}</div>
                    </div>
                    <button className="deploy-btn primary">
                      {agent.price === 'Free' ? 'Install' : 'Subscribe'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'my-agents':
        return (
          <div className="content-scroll">
            <div className="page-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <h1 className="page-title">My Published Agents</h1>
                <p className="page-subtitle">Manage, update, and track the performance of agents you've built.</p>
              </div>
              <button className="create-btn" onClick={() => setActiveTab('publish')}>
                <Plus size={18} /> Publish New
              </button>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Box size={32} />
              </div>
              <h3>No Agents Published Yet</h3>
              <p>You haven't published any AI agents to the marketplace yet. Build and publish your first agent to start monetizing.</p>
              <button className="deploy-btn primary" onClick={() => setActiveTab('publish')}>
                Create Your First Agent
              </button>
            </div>
          </div>
        );

      case 'publish':
        return (
          <div className="content-scroll">
            <div className="page-header">
              <button className="icon-btn" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}} onClick={() => setActiveTab('my-agents')}>
                &larr; Back to My Agents
              </button>
              <h1 className="page-title">Publish New Agent</h1>
              <p className="page-subtitle">Configure your agent's capabilities, prompt instructions, and marketplace listing details.</p>
            </div>

            <div className="publish-container">
              <div className="form-row">
                <div className="form-group">
                  <label>Agent Name</label>
                  <input type="text" className="form-control" placeholder="e.g. DataAnalyzer Pro" />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control">
                    <option>Development</option>
                    <option>Data Science</option>
                    <option>Marketing</option>
                    <option>Design</option>
                    <option>Productivity</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Short Description (Marketplace Listing)</label>
                <input type="text" className="form-control" placeholder="A brief one-sentence description of what your agent does." />
              </div>

              <div className="form-group">
                <label>System Prompt / Core Instructions</label>
                <textarea className="form-control" placeholder="You are an expert AI assistant specialized in..."></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Monetization Model</label>
                  <select className="form-control">
                    <option>Free Open Source</option>
                    <option>Monthly Subscription</option>
                    <option>Pay-per-API Call</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pricing Amount ($)</label>
                  <input type="number" className="form-control" placeholder="0.00" />
                </div>
              </div>

              <div className="form-actions">
                <button className="cancel-btn" onClick={() => setActiveTab('my-agents')}>Cancel</button>
                <button className="submit-btn" onClick={() => setActiveTab('my-agents')}>🚀 Deploy & Publish</button>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="content-scroll">
            <div className="page-header">
              <h1 className="page-title">Performance Analytics</h1>
              <p className="page-subtitle">Track your agents' API calls, active users, and revenue metrics.</p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Total API Calls <Activity size={16} color="var(--text-secondary)" /></div>
                <div className="stat-value">254.2K</div>
                <div className="stat-change change-positive"><TrendingUp size={14}/> +14% this week</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Active Users <Users size={16} color="var(--text-secondary)" /></div>
                <div className="stat-value">12,450</div>
                <div className="stat-change change-positive"><TrendingUp size={14}/> +5% this week</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Avg. Latency <Activity size={16} color="var(--text-secondary)" /></div>
                <div className="stat-value">240ms</div>
                <div className="stat-change change-positive"><TrendingUp size={14} style={{transform:'rotate(180deg)'}}/> -12ms this week</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="stat-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>API Usage Trends</h3>
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer>
                    <AreaChart data={ANALYTICS_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="name" stroke="var(--text-secondary)" axisLine={false} tickLine={false} />
                      <YAxis stroke="var(--text-secondary)" axisLine={false} tickLine={false} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: 'rgba(15,20,31,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} 
                        itemStyle={{ color: 'var(--text-primary)' }}
                      />
                      <Area type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="stat-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Top Agents by Invocations</h3>
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={PIE_DATA}
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {PIE_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: 'rgba(15,20,31,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  {PIE_DATA.map((entry, index) => (
                    <div key={entry.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: COLORS[index % COLORS.length] }}></div>
                        {entry.name}
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Work in progress...</div>;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">A</div>
          <div className="logo-text">AIMART</div>
        </div>

        <nav className="nav-links">
          <div className="nav-group-label" style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '0.5rem', letterSpacing: '0.05em'}}>DASHBOARD</div>
          
          <a className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <LayoutGrid size={18} className="nav-icon" />
            Overview
          </a>
          <a className={`nav-item ${activeTab === 'my-agents' ? 'active' : ''}`} onClick={() => setActiveTab('my-agents')}>
            <Box size={18} className="nav-icon" />
             My Agents
          </a>
          <a className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
            <BarChart2 size={18} className="nav-icon" />
            Analytics
          </a>

          <div className="nav-group-label" style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '2rem', marginBottom: '0.5rem', letterSpacing: '0.05em'}}>DISCOVER</div>
          
          <a className={`nav-item ${activeTab === 'marketplace' ? 'active' : ''}`} onClick={() => setActiveTab('marketplace')}>
            <Search size={18} className="nav-icon" />
            Marketplace
          </a>

          <div style={{marginTop: 'auto'}}>
            <a className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}>
              <Settings size={18} className="nav-icon" />
              Settings
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} color="var(--text-secondary)" />
            <input type="text" className="search-input" placeholder="Quick search..." />
          </div>

          <div className="user-profile">
            <button className="create-btn" onClick={() => setActiveTab('publish')}>
              <Plus size={18} /> New Agent
            </button>
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            <div className="avatar">D</div>
          </div>
        </header>

        {/* View Content */}
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
