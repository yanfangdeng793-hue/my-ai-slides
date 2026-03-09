import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen, Target, Lightbulb, MessageCircle, PenTool, CheckCircle, Home, Maximize, Sparkles, Volume2, RefreshCw, Link, Brain, Search, Users, ArrowRight, CheckSquare, Square, Star, HelpCircle, MousePointerClick, Eye, EyeOff } from 'lucide-react';

const SlideWrapper = ({ title, subtitle, icon: Icon, children, bgImage }: any) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative overflow-hidden">
    {bgImage && <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />}
    <div className="relative z-10 flex flex-col h-full p-12">
      <div className="flex items-center space-x-4 mb-8">
        {Icon && <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl"><Icon size={32} /></div>}
        <div>
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">{title}</h1>
          {subtitle && <p className="text-xl text-slate-500 mt-2">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  </div>
);

const CoverSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0" />
    
    <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
    <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
    
    <div className="relative z-10 text-center space-y-6 p-12 backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-colors duration-500">
      <div className="inline-block px-5 py-2 rounded-full bg-emerald-500/30 text-emerald-50 font-medium text-sm tracking-widest uppercase mb-4 border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]">四年级下册 · 第二单元</div>
      <h1 className="text-7xl font-bold text-white tracking-tight drop-shadow-lg" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>语文园地二</h1>
      <p className="text-2xl text-emerald-50 font-light tracking-wide drop-shadow-md">阅读、识字、表达新本领</p>
    </div>
  </div>
);

const ObjectivesSlide = () => (
  <SlideWrapper title="今天的学习目标" icon={Target}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {[
        { text: "学会4种解决阅读问题的方法", icon: BookOpen, color: "bg-blue-50 text-blue-600 border-blue-200" },
        { text: "认识12个生字，并能加减偏旁组词", icon: PenTool, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
        { text: "理解词语的新旧含义", icon: Lightbulb, color: "bg-amber-50 text-amber-600 border-amber-200" },
        { text: "学会用作比较的方法说明事物", icon: MessageCircle, color: "bg-purple-50 text-purple-600 border-purple-200" },
        { text: "背诵古诗《江畔独步寻花》", icon: BookOpen, color: "bg-rose-50 text-rose-600 border-rose-200" }
      ].map((obj, i) => (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className={`p-6 rounded-2xl border ${obj.color} flex items-center space-x-6 shadow-sm`}>
          <div className="p-4 bg-white rounded-xl shadow-sm"><obj.icon size={28} /></div>
          <span className="text-3xl font-medium">{obj.text}</span>
        </motion.div>
      ))}
    </div>
  </SlideWrapper>
);

const Task1Slide = () => {
  const methods = [
    { name: '联系上下文', icon: Link, desc: '看看前后文写了什么', color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: '结合生活经验', icon: Brain, desc: '想想生活中类似的事', color: 'text-amber-600', bg: 'bg-amber-100' },
    { name: '查找资料', icon: Search, desc: '查字典、上网搜一搜', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: '向别人请教', icon: Users, desc: '问问老师、家长或同学', color: 'text-purple-600', bg: 'bg-purple-100' }
  ];
  return (
    <SlideWrapper title="任务一：交流平台" subtitle="解决阅读问题的方法" icon={BookOpen}>
      <div className="flex flex-col h-full space-y-8">
        <div className="grid grid-cols-4 gap-6">
          {methods.map((method, i) => (
            <motion.div whileHover={{ y: -10, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 cursor-default group">
              <div className={`w-20 h-20 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center text-3xl font-bold group-hover:rotate-12 transition-transform duration-300 shadow-inner`}>
                <method.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{method.name}</h3>
              <p className="text-slate-500 font-medium">{method.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto bg-indigo-50 border border-indigo-100 rounded-3xl p-8 relative overflow-hidden">
          <Sparkles className="absolute right-4 top-4 text-indigo-200" size={80} />
          <div className="flex items-center space-x-4 mb-4 relative z-10"><MessageCircle className="text-indigo-500" size={28} /><h4 className="text-3xl font-bold text-indigo-900">互动时间</h4></div>
          <ul className="space-y-6 text-2xl text-indigo-800 list-disc list-inside relative z-10">
            <li>回想最近读书遇到不懂的地方，你是怎么解决的？</li>
            <li>在文中圈出可以用哪种方法解决的问题。</li>
          </ul>
        </div>
      </div>
    </SlideWrapper>
  );
};

const Task1ExamplesSlide = () => (
  <SlideWrapper title="方法举例" subtitle="学以致用" icon={Lightbulb}>
    <div className="flex flex-col h-full space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden cursor-default">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-400" />
          <h3 className="text-3xl font-bold text-slate-800 mb-4">《琥珀》</h3>
          <p className="text-2xl text-slate-600 mb-6">松脂球为什么会变成化石？</p>
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xl font-medium"><Target size={20} /><span>方法：查找资料</span></div>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden cursor-default">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-400" />
          <h3 className="text-3xl font-bold text-slate-800 mb-4">《飞向蓝天的恐龙》等</h3>
          <p className="text-2xl text-slate-600 mb-6">文开头描写太阳和大海的作用</p>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xl font-medium"><Target size={20} /><span>方法：联系上下文</span></div>
        </motion.div>
      </div>
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 flex-1 flex items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="w-20 h-20 bg-emerald-200 text-emerald-700 rounded-full flex items-center justify-center shrink-0 mr-8 relative z-10"><MessageCircle size={40} /></div>
        <div className="relative z-10">
          <h4 className="text-4xl font-bold text-emerald-900 mb-4">小组活动</h4>
          <p className="text-3xl text-emerald-800 mb-4">小组讨论，分享自己遇到的问题和解决方法。</p>
          <p className="text-2xl text-emerald-600 font-medium">💡 老师提示：可以结合课外阅读的书籍来举例哦！</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const MethodQuizSlide = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const quizzes = [
    { q: "读到《琥珀》中不懂的科学术语", a: "查找资料", icon: Search, color: "text-emerald-600", bg: "bg-emerald-100" },
    { q: "不理解句子中某个词语的意思", a: "联系上下文", icon: Link, color: "text-blue-600", bg: "bg-blue-100" },
    { q: "读到描写乡村生活的段落感觉很熟悉", a: "结合生活经验", icon: Brain, color: "text-amber-600", bg: "bg-amber-100" }
  ];

  return (
    <SlideWrapper title="随堂测验 (一)" subtitle="你会用哪种方法？" icon={HelpCircle}>
      <div className="flex flex-col h-full space-y-6">
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center"><MousePointerClick size={24} /></div>
            <h4 className="text-2xl font-bold text-indigo-900">点击下方卡片，揭晓最适合的阅读方法！</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {quizzes.map((quiz, i) => {
            const isRevealed = revealed.includes(i);
            return (
              <motion.div 
                key={i}
                onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                className="relative cursor-pointer"
                style={{ perspective: 1000 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="w-full h-full relative preserve-3d transition-transform duration-700"
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-6"><HelpCircle size={32} /></div>
                    <h3 className="text-3xl font-bold text-slate-700 leading-relaxed">{quiz.q}</h3>
                    <div className="absolute bottom-6 text-slate-400 text-lg flex items-center bg-slate-50 px-4 py-2 rounded-full"><MousePointerClick size={16} className="mr-2"/> 点击翻转</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-md border border-slate-200 p-8 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className={`w-20 h-20 ${quiz.bg} ${quiz.color} rounded-full flex items-center justify-center mb-6 shadow-inner`}><quiz.icon size={40} /></div>
                    <h3 className={`text-4xl font-bold ${quiz.color}`}>{quiz.a}</h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
};

const MethodQuizSlide2 = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const quizzes = [
    { q: "读到“破釜沉舟”，不知道这个成语背后的历史故事", a: "查找资料", icon: Search, color: "text-emerald-600", bg: "bg-emerald-100" },
    { q: "读到“他气得火冒三丈”，看前面他被欺负了，猜到是很生气", a: "联系上下文", icon: Link, color: "text-blue-600", bg: "bg-blue-100" },
    { q: "文章里有一句深奥的哲理，自己想不明白，去问老师", a: "向别人请教", icon: Users, color: "text-purple-600", bg: "bg-purple-100" }
  ];

  return (
    <SlideWrapper title="随堂测验 (二)" subtitle="更多挑战，你能答对吗？" icon={HelpCircle}>
      <div className="flex flex-col h-full space-y-6">
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center"><MousePointerClick size={24} /></div>
            <h4 className="text-2xl font-bold text-indigo-900">点击下方卡片，揭晓最适合的阅读方法！</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 flex-1">
          {quizzes.map((quiz, i) => {
            const isRevealed = revealed.includes(i);
            return (
              <motion.div 
                key={i}
                onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                className="relative cursor-pointer"
                style={{ perspective: 1000 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="w-full h-full relative preserve-3d transition-transform duration-700"
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-6"><HelpCircle size={32} /></div>
                    <h3 className="text-3xl font-bold text-slate-700 leading-relaxed">{quiz.q}</h3>
                    <div className="absolute bottom-6 text-slate-400 text-lg flex items-center bg-slate-50 px-4 py-2 rounded-full"><MousePointerClick size={16} className="mr-2"/> 点击翻转</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-md border border-slate-200 p-8 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className={`w-20 h-20 ${quiz.bg} ${quiz.color} rounded-full flex items-center justify-center mb-6 shadow-inner`}><quiz.icon size={40} /></div>
                    <h3 className={`text-4xl font-bold ${quiz.color}`}>{quiz.a}</h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
};

const Task2Slide = () => {
  const minusChars = [
    { full: '滨', part: '氵', result: '宾' }, { full: '洁', part: '氵', result: '吉' },
    { full: '预', part: '页', result: '予' }, { full: '趾', part: '⻊', result: '止' },
    { full: '挑', part: '扌', result: '兆' }, { full: '挺', part: '扌', result: '廷' }
  ];
  const plusChars = [
    { base: '中', part: '月', result: '肿' }, { base: '介', part: '阝', result: '阶' },
    { base: '止', part: '⻊', result: '趾' }, { base: '凡', part: '巾', result: '帆' },
    { base: '正', part: '攵', result: '政' }, { base: '刘', part: '氵', result: '浏' }
  ];
  return (
    <SlideWrapper title="任务二：识字加油站" subtitle="巧学生字" icon={PenTool}>
      <div className="flex flex-col h-full space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl font-bold mr-3">-</span>熟字减偏旁</h3>
            <div className="grid grid-cols-2 gap-4">
              {minusChars.map((item, i) => (
                <motion.div whileHover={{ scale: 1.05 }} key={i} className="flex items-center justify-center space-x-2 text-xl font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-default">
                  <span className="text-2xl text-slate-800">{item.full}</span>
                  <span className="text-rose-400 font-bold">-</span>
                  <span className="text-slate-500">{item.part}</span>
                  <ArrowRight size={16} className="text-slate-400 mx-1" />
                  <span className="text-2xl text-emerald-600 font-bold">{item.result}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold mr-3">+</span>熟字加偏旁</h3>
            <div className="grid grid-cols-2 gap-4">
              {plusChars.map((item, i) => (
                <motion.div whileHover={{ scale: 1.05 }} key={i} className="flex items-center justify-center space-x-2 text-xl font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-default">
                  <span className="text-2xl text-slate-800">{item.base}</span>
                  <span className="text-emerald-400 font-bold">+</span>
                  <span className="text-slate-500">{item.part}</span>
                  <ArrowRight size={16} className="text-slate-400 mx-1" />
                  <span className="text-2xl text-emerald-600 font-bold">{item.result}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 mt-auto flex items-center justify-between">
          <div>
            <h4 className="text-3xl font-bold text-indigo-900 mb-4 flex items-center"><MessageCircle className="mr-3" /> 互动挑战</h4>
            <p className="text-2xl text-indigo-800">用 <strong>“分、方、青”</strong> 加偏旁组新字；用 <strong>“都、骑、抽”</strong> 减偏旁组新字。</p>
          </div>
          <div className="w-20 h-20 bg-indigo-200 text-indigo-600 rounded-full flex items-center justify-center shrink-0"><Target size={40} /></div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const CharacterPracticeSlide = () => {
  const initialChars = [
    { char: '宾', pinyin: 'bīn', word: '宾客' }, { char: '吉', pinyin: 'jí', word: '吉利' },
    { char: '予', pinyin: 'yǔ', word: '给予' }, { char: '止', pinyin: 'zhǐ', word: '停止' },
    { char: '兆', pinyin: 'zhào', word: '预兆' }, { char: '廷', pinyin: 'tíng', word: '朝廷' },
    { char: '肿', pinyin: 'zhǒng', word: '红肿' }, { char: '阶', pinyin: 'jiē', word: '台阶' },
    { char: '趾', pinyin: 'zhǐ', word: '脚趾' }, { char: '帆', pinyin: 'fān', word: '帆船' },
    { char: '政', pinyin: 'zhèng', word: '政治' }, { char: '浏', pinyin: 'liú', word: '浏览' },
  ];
  const [chars, setChars] = useState(initialChars);
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggleReveal = (index: number) => {
    setRevealed(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const shuffleChars = () => {
    setChars([...chars].sort(() => Math.random() - 0.5));
    setRevealed([]);
  };

  return (
    <SlideWrapper title="生字练习" subtitle="点击卡片翻转，开火车朗读" icon={PenTool}>
      <div className="flex flex-col h-full">
        <div className="flex justify-end mb-4">
          <button 
            onClick={shuffleChars}
            className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl font-bold hover:bg-indigo-200 transition-colors"
          >
            <RefreshCw size={18} />
            <span>打乱顺序</span>
          </button>
        </div>
        <div className="grid grid-cols-6 gap-4 mb-6">
          {chars.map((item, i) => {
            const isRevealed = revealed.includes(i);
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: i * 0.05 }} 
                key={item.char + i} 
                onClick={() => toggleReveal(i)}
                className="relative cursor-pointer aspect-square"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="w-full h-full relative preserve-3d transition-transform duration-500"
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front: Character only */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-200 p-3 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    <span className="text-6xl font-bold text-slate-800" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>{item.char}</span>
                    <div className="absolute bottom-2 right-2 text-slate-300"><MousePointerClick size={16} /></div>
                  </div>
                  {/* Back: Pinyin and Word */}
                  <div className="absolute inset-0 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200 p-3 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <span className="text-xl text-emerald-600 font-medium mb-2">{item.pinyin}</span>
                    <span className="text-2xl font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg">{item.word}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 flex items-center justify-center space-x-12 mt-auto">
          {['能认读', '会拼音', '能组词'].map((text, i) => (
            <div key={i} className="flex items-center space-x-3 text-2xl font-bold text-amber-800"><CheckCircle size={28} /><span>{text}</span></div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

const Task3Slide = () => {
  const techWords = [
    { word: '云技术', desc: '基于云计算的各种技术' },
    { word: '多媒体', desc: '包含文字、声音、图像等多种媒体' },
    { word: '互联网', desc: '连接全球计算机的网络' },
    { word: '克隆', desc: '无性繁殖，复制出一样的个体' }
  ];
  const oldWords = [
    { word: '桌面', desc: '新义：电脑屏幕的主界面' },
    { word: '窗口', desc: '新义：电脑屏幕上的矩形工作区' },
    { word: '潜水', desc: '新义：在群里只看不发言' },
    { word: '文件夹', desc: '新义：电脑中用来存放电子文件的图标' }
  ];
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const activeWordData = [...techWords, ...oldWords].find(w => w.word === activeWord);

  return (
    <SlideWrapper title="任务三：词句段运用" subtitle="理解词语的新含义" icon={BookOpen}>
      <div className="flex flex-col h-full space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl shadow-lg text-white relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />
            <h3 className="text-3xl font-bold mb-6 flex items-center relative z-10"><Lightbulb className="mr-4" size={32} />科技新词</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {techWords.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveWord(activeWord === item.word ? null : item.word)}
                  className={`p-4 rounded-xl text-3xl font-medium text-center border cursor-pointer transition-colors ${activeWord === item.word ? 'bg-white text-blue-600 border-white shadow-md' : 'bg-white/20 backdrop-blur-sm border-white/30'}`}
                >
                  {item.word}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-3xl shadow-lg text-white relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />
            <h3 className="text-3xl font-bold mb-6 flex items-center relative z-10"><Target className="mr-4" size={32} />旧词新义</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {oldWords.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveWord(activeWord === item.word ? null : item.word)}
                  className={`p-4 rounded-xl text-3xl font-medium text-center border cursor-pointer transition-colors ${activeWord === item.word ? 'bg-white text-emerald-600 border-white shadow-md' : 'bg-white/20 backdrop-blur-sm border-white/30'}`}
                >
                  {item.word}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* New Explanation Area */}
        <div className="flex-1 bg-white rounded-3xl p-8 border-2 border-slate-200 flex items-center justify-center relative overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            {activeWordData ? (
              <motion.div
                key={activeWordData.word}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center max-w-4xl"
              >
                <div className="inline-block bg-indigo-100 text-indigo-800 px-8 py-3 rounded-full text-3xl font-bold mb-6 shadow-sm">
                  {activeWordData.word}
                </div>
                <p className="text-4xl text-slate-700 leading-relaxed font-medium">
                  {activeWordData.desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-400 text-3xl flex flex-col items-center"
              >
                <MousePointerClick size={64} className="mb-6 opacity-40 text-slate-500" />
                <p className="tracking-wide">请点击上方词语，在此处查看详细解释</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-3xl p-6 flex items-center justify-between">
          <div><h4 className="text-3xl font-bold text-slate-800 mb-2 flex items-center"><Sparkles className="text-amber-500 mr-2" />互动交流</h4><p className="text-2xl text-slate-600">你还知道哪些词语有新含义？</p></div>
          <div className="flex space-x-4">
            {['打卡', '刷屏', '粉丝', '...'].map((word, i) => (
              <motion.span whileHover={{ y: -5, rotate: Math.random() * 10 - 5 }} key={i} className="px-6 py-3 bg-white text-indigo-700 border border-indigo-100 rounded-full text-2xl font-medium cursor-pointer shadow-sm">{word}</motion.span>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const WordChallengeSlide = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const challenges = [
    { prefix: "这家新开的奶茶店，周末有很多人去", word: "打卡", suffix: "。", meaning: "到某个网红地点拍照留念" },
    { prefix: "他在班级群里从来不说话，一直在", word: "潜水", suffix: "。", meaning: "在群组里只看信息不发言" },
    { prefix: "这条搞笑视频在朋友圈被大家疯狂", word: "刷屏", suffix: "。", meaning: "大量重复发送相同或相似的内容" }
  ];

  return (
    <SlideWrapper title="词语新义大挑战" subtitle="猜猜看，它们是什么意思？" icon={Target}>
      <div className="flex flex-col h-full space-y-6">
        {challenges.map((item, i) => {
          const isRevealed = revealed.includes(i);
          return (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-6 relative overflow-hidden group"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-2xl shrink-0">{i + 1}</div>
              <div className="flex-1 text-3xl text-slate-700 flex items-center flex-wrap leading-relaxed">
                <span>{item.prefix}</span>
                <button 
                  onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                  className={`mx-3 px-4 py-1.5 rounded-xl font-bold transition-all duration-300 flex items-center ${isRevealed ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:scale-105 shadow-sm'}`}
                >
                  {item.word} {!isRevealed && <MousePointerClick size={24} className="ml-2 opacity-50" />}
                </button>
                <span>{item.suffix}</span>
              </div>
              <AnimatePresence>
                {isRevealed && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="ml-auto bg-emerald-50 border border-emerald-200 px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-sm shrink-0"
                  >
                    <CheckCircle className="text-emerald-500" size={28} />
                    <span className="text-2xl font-bold text-emerald-800">{item.meaning}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div className="mt-auto bg-blue-50 border border-blue-100 rounded-3xl p-6 flex items-center justify-center">
          <p className="text-2xl text-blue-800 font-medium flex items-center"><Sparkles className="mr-2 text-blue-500" size={28} /> 语言是不断发展的，我们要善于在生活中学习新词汇！</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

const WordChallengeSlide2 = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const challenges = [
    { prefix: "这件衣服太便宜了，刚上架就被", word: "秒杀", suffix: "了。", meaning: "在极短时间内被抢购一空" },
    { prefix: "他唱歌跑调太严重了，引来大家一阵", word: "吐槽", suffix: "。", meaning: "指出错误或进行调侃、抱怨" },
    { prefix: "这篇文章写得真好，我要给作者", word: "点赞", suffix: "！", meaning: "表示赞同、喜爱或支持" }
  ];

  return (
    <SlideWrapper title="词语新义大挑战（二）" subtitle="更多新词汇，你能猜对吗？" icon={Target}>
      <div className="flex flex-col h-full space-y-6">
        {challenges.map((item, i) => {
          const isRevealed = revealed.includes(i);
          return (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-6 relative overflow-hidden group"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-2xl shrink-0">{i + 4}</div>
              <div className="flex-1 text-3xl text-slate-700 flex items-center flex-wrap leading-relaxed">
                <span>{item.prefix}</span>
                <button 
                  onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                  className={`mx-3 px-4 py-1.5 rounded-xl font-bold transition-all duration-300 flex items-center ${isRevealed ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:scale-105 shadow-sm'}`}
                >
                  {item.word} {!isRevealed && <MousePointerClick size={24} className="ml-2 opacity-50" />}
                </button>
                <span>{item.suffix}</span>
              </div>
              <AnimatePresence>
                {isRevealed && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="ml-auto bg-emerald-50 border border-emerald-200 px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-sm shrink-0"
                  >
                    <CheckCircle className="text-emerald-500" size={28} />
                    <span className="text-2xl font-bold text-emerald-800">{item.meaning}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div className="mt-auto bg-blue-50 border border-blue-100 rounded-3xl p-6 flex items-center justify-center">
          <p className="text-2xl text-blue-800 font-medium flex items-center"><Sparkles className="mr-2 text-blue-500" size={28} /> 语言是不断发展的，我们要善于在生活中学习新词汇！</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

const ComparisonSlide = () => {
  const [showExample, setShowExample] = useState(false);
  return (
    <SlideWrapper title="作比较说明方法" subtitle="让说明更清楚" icon={PenTool}>
      <div className="flex flex-col h-full space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0"><Lightbulb size={32} /></div>
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">什么是作比较？</h3>
              <p className="text-2xl text-slate-600 leading-relaxed">把<span className="font-bold text-rose-500 mx-1">陌生事物</span>和<span className="font-bold text-emerald-500 mx-1">熟悉事物</span>对比，让说明更清楚、直观。</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden flex items-center justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="relative z-10 w-2/3">
            <h3 className="text-3xl font-bold text-slate-300 mb-6 flex items-center"><Star className="mr-2 text-amber-400" size={28} /> 例句分析</h3>
            <p className="text-4xl font-medium leading-relaxed">我的书包像<span className="text-amber-400 border-b-2 border-amber-400 pb-1 mx-2">小山</span>一样沉重。</p>
          </div>
          <div className="relative z-10 w-1/3 flex items-center justify-center space-x-4">
             <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center"><span className="text-5xl mb-2">🎒</span><span className="text-lg text-slate-300">书包</span></div>
             <ArrowRight className="text-slate-400" size={32} />
             <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center"><span className="text-5xl mb-2">⛰️</span><span className="text-lg text-slate-300">小山</span></div>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 mt-auto relative">
          <h4 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><PenTool className="mr-3" /> 仿写挑战</h4>
          <p className="text-xl text-emerald-800 mb-6">请用“像…一样”写一句你喜欢的东西。</p>
          <div className="flex items-center justify-between">
            <div className="h-14 flex-1 mr-6 bg-white rounded-xl border border-emerald-200 flex items-center px-6 text-slate-500 text-lg shadow-inner relative overflow-hidden">
              <AnimatePresence mode="wait">
                {showExample ? (
                  <motion.span key="answer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-emerald-700 font-bold">
                    例如：天上的白云像棉花糖一样柔软。
                  </motion.span>
                ) : (
                  <motion.span key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="italic opacity-60">
                    在这里写下你的句子...
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => setShowExample(!showExample)} className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-md flex items-center space-x-2 shrink-0">
              <Lightbulb size={20} />
              <span>{showExample ? '隐藏示例' : '查看示例'}</span>
            </button>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const PoemSlide = () => {
  const [showPinyin, setShowPinyin] = useState(false);
  
  return (
    <SlideWrapper title="任务四：日积月累" subtitle="品读古诗" icon={BookOpen}>
      <div className="flex h-full gap-8">
        <div className="w-1/2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 z-0" />
          
          <div className="absolute top-6 right-6 z-20">
            <button onClick={() => setShowPinyin(!showPinyin)} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors flex items-center">
              {showPinyin ? <EyeOff size={16} className="mr-2" /> : <Eye size={16} className="mr-2" />}
              {showPinyin ? '隐藏拼音' : '显示拼音'}
            </button>
          </div>

          <h3 className="text-4xl font-bold text-slate-800 mb-6 relative z-10 drop-shadow-sm" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>江畔独步寻花</h3>
          <p className="text-xl text-slate-600 mb-8 relative z-10 font-medium">[唐] 杜甫</p>
          <div className="space-y-6 text-3xl text-slate-800 leading-loose relative z-10" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>
            <div className="hover:text-rose-600 transition-colors cursor-default relative">
              {showPinyin && <div className="absolute bottom-full left-0 w-full text-sm text-slate-400 font-sans tracking-[0.5em] -mb-2">huáng shī tǎ qián jiāng shuǐ dōng</div>}
              黄师 / 塔前 / 江水东，
            </div>
            <div className="hover:text-rose-600 transition-colors cursor-default relative">
              {showPinyin && <div className="absolute bottom-full left-0 w-full text-sm text-slate-400 font-sans tracking-[0.5em] -mb-2">chūn guāng lǎn kùn yǐ wēi fēng</div>}
              春光 / 懒困 / 倚微风。
            </div>
            <div className="hover:text-rose-600 transition-colors cursor-default relative">
              {showPinyin && <div className="absolute bottom-full left-0 w-full text-sm text-slate-400 font-sans tracking-[0.5em] -mb-2">táo huā yī cù kāi wú zhǔ</div>}
              桃花 / 一簇 / 开无主，
            </div>
            <div className="hover:text-rose-600 transition-colors cursor-default relative">
              {showPinyin && <div className="absolute bottom-full left-0 w-full text-sm text-slate-400 font-sans tracking-[0.5em] -mb-2">kě ài shēn hóng ài qiǎn hóng</div>}
              可爱 / 深红 / 爱浅红？
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 flex-1 relative overflow-hidden">
            <Volume2 className="absolute -right-4 -bottom-4 text-amber-200/50" size={120} />
            <h4 className="text-2xl font-bold text-amber-900 mb-4 flex items-center relative z-10"><MessageCircle className="mr-3" /> 朗读技巧</h4>
            <p className="text-xl text-amber-800 relative z-10 leading-relaxed">注意节奏与情感，读出春天的美好和诗人的闲适。可以尝试用轻快、愉悦的语调来朗读后两句。</p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex-1 relative overflow-hidden">
            <Sparkles className="absolute -right-4 -bottom-4 text-indigo-200/50" size={120} />
            <h4 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center relative z-10"><Target className="mr-3" /> 互动环节</h4>
            <ul className="space-y-4 text-xl text-indigo-800 list-disc list-inside relative z-10">
              <li>看插图，说出诗意</li>
              <li>想象画面，说出你看到的景象</li>
              <li>你最喜欢哪一句？为什么？</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const PoemMemorySlide = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  
  const toggleWord = (index: number) => {
    setRevealed(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const renderLine = (text: string, hideIndex: number, hiddenWord: string) => {
    const parts = text.split(hiddenWord);
    const isRevealed = revealed.includes(hideIndex);
    return (
      <div className="flex items-center justify-center space-x-2 my-6">
        <span>{parts[0]}</span>
        <button 
          onClick={() => toggleWord(hideIndex)}
          className={`relative overflow-hidden transition-all duration-300 rounded-xl px-4 py-1 mx-2 font-bold ${isRevealed ? 'bg-transparent text-rose-600' : 'bg-slate-200 text-transparent hover:bg-slate-300 min-w-[100px]'}`}
        >
          {isRevealed ? hiddenWord : '？？'}
          {!isRevealed && <MousePointerClick size={20} className="absolute inset-0 m-auto text-slate-400" />}
        </button>
        <span>{parts[1]}</span>
      </div>
    );
  };

  return (
    <SlideWrapper title="记忆大比拼" subtitle="你能填出缺失的诗句吗？" icon={Brain}>
      <div className="flex flex-col h-full items-center justify-center relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        <div className="bg-white/90 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-white/50 text-center relative z-10 w-3/4">
          <h3 className="text-4xl font-bold text-slate-800 mb-8" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>江畔独步寻花</h3>
          
          <div className="text-4xl text-slate-700 leading-loose" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>
            {renderLine("黄师塔前江水东，", 0, "江水")}
            {renderLine("春光懒困倚微风。", 1, "微风")}
            {renderLine("桃花一簇开无主，", 2, "无主")}
            {renderLine("可爱深红爱浅红？", 3, "浅红")}
          </div>
          
          <div className="mt-10 flex justify-center space-x-6">
            <button onClick={() => setRevealed([0, 1, 2, 3])} className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full font-bold hover:bg-emerald-200 transition-colors flex items-center"><Eye className="mr-2" size={20}/> 显示全部</button>
            <button onClick={() => setRevealed([])} className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center"><EyeOff className="mr-2" size={20}/> 重新挑战</button>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const SummarySlide = () => {
  const [revealed, setRevealed] = useState(0);
  const items = ['4种阅读解题方法', '加减偏旁识字法', '区分词语新旧含义', '作比较说明方法', '背诵古诗《江畔独步寻花》'];
  
  return (
    <SlideWrapper title="课堂小结" subtitle="温故而知新" icon={CheckCircle}>
      <div className="flex flex-col h-full space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden flex-1">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="flex justify-between items-center mb-8 relative z-10">
            <h3 className="text-3xl font-bold text-slate-800">今天我们学会了：</h3>
            <button 
              onClick={() => setRevealed(prev => Math.min(prev + 1, items.length))}
              disabled={revealed === items.length}
              className="px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold hover:bg-emerald-200 disabled:opacity-50 transition-colors"
            >
              {revealed === items.length ? '全部回顾完毕' : '点击回顾下一条'}
            </button>
          </div>
          <div className="space-y-4 relative z-10">
            {items.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20, height: 0 }} 
                animate={{ opacity: i < revealed ? 1 : 0, x: i < revealed ? 0 : -20, height: i < revealed ? 'auto' : 0 }} 
                transition={{ duration: 0.3 }} 
                key={i} 
                className="flex items-center space-x-4 text-2xl text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl shadow-sm shrink-0"><CheckCircle size={24} /></div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 rounded-3xl shadow-lg text-white mt-auto relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
          <h4 className="text-3xl font-bold mb-4 flex items-center relative z-10"><PenTool className="mr-3" /> 随堂小练笔</h4>
          <p className="text-2xl relative z-10">用作比较的方法介绍你喜欢的东西，写1-2句话。</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

const HomeworkSlide = () => {
  const [checked, setChecked] = useState<number[]>([]);
  const toggleCheck = (i: number) => setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  
  const tasks = [
    { title: '背诵默写', desc: '背诵并默写古诗《江畔独步寻花》', icon: BookOpen, color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { title: '字词积累', desc: '整理12个生字，组词写在积累本上', icon: PenTool, color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { title: '阅读实践', desc: '在课外阅读中尝试用4种方法解决2个不懂的问题', icon: Target, color: 'bg-blue-50 text-blue-600 border-blue-200' }
  ];

  return (
    <SlideWrapper title="课后作业" subtitle="巩固提升" icon={Home}>
      <div className="flex flex-col h-full justify-center">
        <div className="grid grid-cols-1 gap-6">
          {tasks.map((item, i) => {
            const isChecked = checked.includes(i);
            return (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.1 }} 
                key={i} 
                onClick={() => toggleCheck(i)}
                className={`p-6 rounded-3xl border ${item.color} flex items-center space-x-6 cursor-pointer transition-all duration-300 ${isChecked ? 'opacity-60 scale-[0.98] grayscale-[0.5]' : 'hover:shadow-md hover:-translate-y-1'}`}
              >
                <div className="p-4 bg-white rounded-2xl shadow-sm relative">
                  <item.icon size={36} className={isChecked ? 'opacity-30' : ''} />
                  {isChecked && <CheckCircle className="absolute inset-0 m-auto text-emerald-500" size={48} />}
                </div>
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold mb-3 ${isChecked ? 'line-through' : ''}`}>{item.title}</h3>
                  <p className="text-2xl opacity-80">{item.desc}</p>
                </div>
                <div className="px-4">
                  {isChecked ? <CheckSquare size={40} className="text-emerald-500" /> : <Square size={40} className="opacity-30" />}
                </div>
              </motion.div>
            );
          })}
        </div>
        {checked.length === tasks.length && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-8 p-6 bg-emerald-100 text-emerald-700 rounded-2xl text-center font-bold text-3xl flex items-center justify-center space-x-4 border border-emerald-200">
            <Star className="fill-emerald-500" size={32} />
            <span>太棒了！你已经了解了所有作业！</span>
            <Star className="fill-emerald-500" size={32} />
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  );
};

const GroupTask1Slide = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <SlideWrapper title="小组合作任务一：阅读小侦探" subtitle="学以致用，解决难题" icon={Users}>
      <div className="flex flex-col h-full space-y-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><Search className="mr-2 text-indigo-500" /> 案发现场</h3>
          <p className="text-2xl text-slate-700 leading-loose font-medium" style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}>
            “在那个<span className="bg-rose-100 text-rose-700 px-2 rounded mx-1">静谧</span>的夜晚，天空中突然划过一道<span className="bg-amber-100 text-amber-700 px-2 rounded mx-1">流星雨</span>。小明想起了奶奶曾经说过的关于星星的故事，不禁陷入了沉思。”
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 flex flex-col">
            <h4 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center"><MessageCircle className="mr-2" /> 讨论任务</h4>
            <ul className="space-y-6 text-xl text-indigo-800 list-disc list-inside flex-1">
              <li>不理解“静谧”的意思怎么办？</li>
              <li>想知道“流星雨”是怎么形成的怎么办？</li>
              <li>小明想起了什么故事？</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex flex-col relative overflow-hidden">
            <h4 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><Lightbulb className="mr-2" /> 侦探报告</h4>
            <AnimatePresence>
              {showAnswer ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 text-xl text-emerald-800">
                  <p><strong>静谧：</strong> 联系上下文（夜晚），或者查字典。</p>
                  <p><strong>流星雨：</strong> 查找资料（上网搜一搜）。</p>
                  <p><strong>星星的故事：</strong> 结合生活经验（想一想自己听过的故事），或者向别人请教。</p>
                </motion.div>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <button onClick={() => setShowAnswer(true)} className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-md flex items-center">
                    <Eye className="mr-2" /> 揭晓答案
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const GroupTask2Slide = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [selectedRadical, setSelectedRadical] = useState<string | null>(null);
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', char?: string } | null>(null);

  const radicals = ['氵', '扌', '⻊', '月', '阝', '巾', '攵', '页', '木', '火', '土', '日', '女', '口', '忄', '讠', '钅', '纟'];
  const bases = ['宾', '吉', '予', '止', '兆', '廷', '中', '介', '凡', '正', '刘', '青', '包', '马', '巴', '交', '主', '每', '寸', '也', '白', '半'];

  const validPairs: Record<string, string> = {
    '氵-宾': '滨', '氵-吉': '洁', '氵-刘': '浏', '氵-青': '清', '氵-包': '泡', '氵-交': '浇', '氵-主': '注', '氵-每': '海', '氵-也': '池', '氵-白': '泊',
    '扌-兆': '挑', '扌-廷': '挺', '扌-包': '抱', '扌-巴': '把', '扌-白': '拍',
    '⻊-止': '趾', '⻊-包': '跑', '⻊-兆': '跳',
    '月-中': '肿', '月-半': '胖',
    '阝-介': '阶', '阝-交': '郊', '阝-白': '陌',
    '巾-凡': '帆',
    '攵-正': '政',
    '页-予': '预',
    '木-交': '校', '木-主': '柱', '木-兆': '桃', '木-每': '梅', '木-寸': '村', '木-白': '柏',
    '火-包': '炮',
    '土-也': '地',
    '日-青': '晴',
    '女-马': '妈', '女-也': '她',
    '口-马': '吗', '口-巴': '吧',
    '忄-青': '情',
    '讠-青': '请', '讠-寸': '讨',
    '钅-白': '铂',
    '纟-交': '绞'
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (selectedRadical && selectedBase) {
      const pair = `${selectedRadical}-${selectedBase}`;
      const result = validPairs[pair];

      if (result) {
        setFeedback({ type: 'success', char: result });
        setTimeout(() => {
          if (!unlocked.includes(result)) {
            setUnlocked(prev => [...prev, result]);
          }
          setSelectedRadical(null);
          setSelectedBase(null);
          setFeedback(null);
        }, 2000);
      } else {
        setFeedback({ type: 'error' });
        setTimeout(() => {
          setSelectedRadical(null);
          setSelectedBase(null);
          setFeedback(null);
        }, 1000);
      }
    }
  }, [selectedRadical, selectedBase]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => { setIsActive(false); setTimeLeft(60); setUnlocked([]); setSelectedRadical(null); setSelectedBase(null); setFeedback(null); };

  return (
    <SlideWrapper title="小组合作任务二：汉字魔术师" subtitle="限时挑战，看谁组得多！" icon={Users}>
      <div className="flex flex-col h-full space-y-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 shrink-0">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${timeLeft <= 10 ? 'bg-rose-100 text-rose-600 border-rose-200 animate-pulse' : 'bg-emerald-100 text-emerald-600 border-emerald-200'}`}>
              {timeLeft}s
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">倒计时挑战</h3>
              <p className="text-xl text-slate-500 mt-2">点击偏旁和基础字，如果能组成新字，它们就会合体哦！</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button onClick={toggleTimer} className={`px-6 py-2 rounded-xl font-bold text-white transition-colors ${isActive ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}>
              {isActive ? '暂停' : '开始'}
            </button>
            <button onClick={resetTimer} className="px-6 py-2 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition-colors">
              重置
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Radicals */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 flex flex-col items-center relative overflow-hidden">
            <h4 className="text-3xl font-bold text-blue-900 mb-6 relative z-10">偏旁部首</h4>
            <div className="flex flex-wrap justify-center gap-4 relative z-10 overflow-y-auto content-start flex-1">
              {radicals.map((p, i) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={i}
                  onClick={() => !feedback && setSelectedRadical(p)}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-sm border-2 transition-all ${selectedRadical === p ? 'bg-blue-500 text-white border-blue-600 ring-4 ring-blue-300' : 'bg-white text-blue-600 border-blue-200 hover:border-blue-400'}`}
                >
                  {p}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Bases */}
          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 flex flex-col items-center relative overflow-hidden">
            <h4 className="text-3xl font-bold text-amber-900 mb-6 relative z-10">基础字</h4>
            <div className="flex flex-wrap justify-center gap-4 relative z-10 overflow-y-auto content-start flex-1">
              {bases.map((b, i) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={i}
                  onClick={() => !feedback && setSelectedBase(b)}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-sm border-2 transition-all ${selectedBase === b ? 'bg-amber-500 text-white border-amber-600 ring-4 ring-amber-300' : 'bg-white text-amber-600 border-amber-200 hover:border-amber-400'}`}
                >
                  {b}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Unlocked Area */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 shrink-0 flex items-center min-h-[120px]">
          <h4 className="text-2xl font-bold text-emerald-900 mr-6 whitespace-nowrap flex items-center"><Sparkles className="mr-2 text-emerald-500"/> 已解锁 ({unlocked.length})</h4>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {unlocked.map((char, i) => (
                <motion.div
                  key={char + i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="w-14 h-14 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-3xl font-bold shadow-md"
                >
                  {char}
                </motion.div>
              ))}
              {unlocked.length === 0 && (
                <span className="text-emerald-600/50 text-xl font-medium italic">还没有解锁汉字哦，快去尝试组合吧！</span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Animation Overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm rounded-3xl"
            >
              {feedback.type === 'success' ? (
                <div className="flex items-center space-x-8 bg-white/90 p-12 rounded-[3rem] shadow-2xl border-4 border-emerald-200">
                  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl font-bold text-blue-600 bg-blue-100 w-32 h-32 flex items-center justify-center rounded-3xl shadow-inner">
                    {selectedRadical}
                  </motion.div>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl text-slate-400 font-bold">
                    +
                  </motion.div>
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl font-bold text-amber-600 bg-amber-100 w-32 h-32 flex items-center justify-center rounded-3xl shadow-inner">
                    {selectedBase}
                  </motion.div>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="text-6xl text-slate-400 font-bold">
                    =
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: 'spring', bounce: 0.6 }}
                    className="text-9xl font-bold text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.5)] ml-4"
                    style={{ fontFamily: '"STKaiti", "KaiTi", serif' }}
                  >
                    {feedback.char}
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  animate={{ x: [0, -20, 20, -20, 20, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-6 bg-white/90 p-10 rounded-[3rem] shadow-2xl border-4 border-rose-200"
                >
                  <div className="text-6xl font-bold text-slate-400 bg-slate-100 w-24 h-24 flex items-center justify-center rounded-2xl">{selectedRadical}</div>
                  <div className="text-6xl font-bold text-rose-500">?</div>
                  <div className="text-6xl font-bold text-slate-400 bg-slate-100 w-24 h-24 flex items-center justify-center rounded-2xl">{selectedBase}</div>
                  <div className="text-3xl text-rose-500 font-bold ml-4">不能组合哦</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
};

const GroupTask3Slide = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const words = [
    { word: "粉丝", meaning: "原指一种食品，新义指崇拜某人或某种事物的人。" },
    { word: "充电", meaning: "原指给电池补充电能，新义指通过学习补充知识。" },
    { word: "菜鸟", meaning: "原指供食用的鸟类，新义指在某方面技术不熟练的新手。" },
    { word: "炒鱿鱼", meaning: "原指一道菜，新义指被解雇或开除。" }
  ];

  return (
    <SlideWrapper title="小组合作任务三：生活中的新词汇" subtitle="头脑风暴，分享交流" icon={Users}>
      <div className="flex flex-col h-full space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-6">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0"><MessageCircle size={32} /></div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">小组讨论</h3>
            <p className="text-xl text-slate-600 mt-2">在生活中，你还听过哪些“旧词新义”或者“网络新词”？和小组同学分享，并试着解释它的意思。</p>
          </div>
        </div>
        
        <div className="bg-slate-800 rounded-3xl p-8 flex-1 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <h4 className="text-3xl font-bold text-white mb-8 flex items-center relative z-10"><Lightbulb className="mr-2 text-amber-400" /> 老师的词汇锦囊</h4>
          <div className="grid grid-cols-2 gap-4 relative z-10 flex-1">
            {words.map((item, i) => {
              const isRevealed = revealed.includes(i);
              return (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-amber-400">{item.word}</span>
                    <button 
                      onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                    >
                      {isRevealed ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {isRevealed ? (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-slate-300 text-lg leading-relaxed mt-4">
                        {item.meaning}
                      </motion.p>
                    ) : (
                      <p className="text-slate-500 text-lg italic mt-4">点击眼睛图标查看解释...</p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const GroupTask3Slide2 = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const words = [
    { word: "背锅", meaning: "原指背着锅，新义指代人受过、承担责任。" },
    { word: "种草", meaning: "原指种植草本植物，新义指分享推荐好物，激发他人的购买欲。" },
    { word: "大虾", meaning: "原指一种海鲜，新义指网络上的高手（大侠的谐音）。" },
    { word: "马甲", meaning: "原指一种衣服，新义指在网络论坛上的小号或化名。" }
  ];

  return (
    <SlideWrapper title="小组合作任务三：生活中的新词汇（二）" subtitle="更多词汇锦囊" icon={Users}>
      <div className="flex flex-col h-full space-y-6">
        <div className="bg-slate-800 rounded-3xl p-8 flex-1 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <h4 className="text-3xl font-bold text-white mb-8 flex items-center relative z-10"><Lightbulb className="mr-2 text-amber-400" /> 老师的词汇锦囊（补充）</h4>
          <div className="grid grid-cols-2 gap-4 relative z-10 flex-1">
            {words.map((item, i) => {
              const isRevealed = revealed.includes(i);
              return (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-amber-400">{item.word}</span>
                    <button 
                      onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                    >
                      {isRevealed ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {isRevealed ? (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-slate-300 text-lg leading-relaxed mt-4">
                        {item.meaning}
                      </motion.p>
                    ) : (
                      <p className="text-slate-500 text-lg italic mt-4">点击眼睛图标查看解释...</p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const slides = [CoverSlide, ObjectivesSlide, Task1Slide, Task1ExamplesSlide, MethodQuizSlide, MethodQuizSlide2, GroupTask1Slide, Task2Slide, CharacterPracticeSlide, GroupTask2Slide, Task3Slide, WordChallengeSlide, WordChallengeSlide2, GroupTask3Slide, GroupTask3Slide2, ComparisonSlide, PoemSlide, PoemMemorySlide, SummarySlide, HomeworkSlide];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1)), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => Math.max(prev - 1, 0)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(err => console.log(err));
    else document.exitFullscreen();
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden font-sans">
      <div className={`relative bg-white shadow-2xl overflow-hidden transition-all duration-300 ${isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl aspect-[16/9] rounded-2xl'}`}>
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="w-full h-full">
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-6 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center space-x-6 shadow-xl border border-white/10 text-white">
            <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors"><ChevronLeft size={24} /></button>
            <div className="text-sm font-medium tracking-widest">{currentSlide + 1} / {slides.length}</div>
            <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors"><ChevronRight size={24} /></button>
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button onClick={toggleFullscreen} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Toggle Fullscreen"><Maximize size={20} /></button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-slate-200 w-full z-40">
          <div className="h-full bg-emerald-500 transition-all duration-300 ease-out" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
