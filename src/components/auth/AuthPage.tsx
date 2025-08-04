import { useState } from "react";
import { Code, BookOpen, Laptop, Zap, Brain, Lightbulb, Monitor, Coffee, Terminal, Github } from "lucide-react";
import { AuthCard } from "./AuthCard";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-interactive bg-[length:200%_200%] animate-gradient-shift flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements with interactive gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-float animate-glow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-primary-glow/12 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-glow" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Floating coding/study icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Row 1 - Top level icons */}
        <Code 
          className="absolute top-[10%] left-[15%] text-primary/40 animate-float" 
          size={32} 
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <BookOpen 
          className="absolute top-[20%] right-[20%] text-primary-glow/35 animate-float" 
          size={28} 
          style={{ animationDelay: "1s", animationDuration: "10s" }}
        />
        <Laptop 
          className="absolute top-[15%] left-[70%] text-primary/30 animate-float" 
          size={30} 
          style={{ animationDelay: "2s", animationDuration: "9s" }}
        />
        
        {/* Row 2 - Mid level icons */}
        <Brain 
          className="absolute top-[40%] left-[10%] text-primary-glow/40 animate-float" 
          size={26} 
          style={{ animationDelay: "3s", animationDuration: "11s" }}
        />
        <Terminal 
          className="absolute top-[45%] right-[15%] text-primary/35 animate-float" 
          size={24} 
          style={{ animationDelay: "4s", animationDuration: "7s" }}
        />
        <Lightbulb 
          className="absolute top-[35%] left-[80%] text-primary-glow/30 animate-float" 
          size={28} 
          style={{ animationDelay: "5s", animationDuration: "12s" }}
        />
        
        {/* Row 3 - Bottom level icons */}
        <Github 
          className="absolute bottom-[30%] left-[25%] text-primary/40 animate-float" 
          size={30} 
          style={{ animationDelay: "6s", animationDuration: "9s" }}
        />
        <Monitor 
          className="absolute bottom-[25%] right-[30%] text-primary-glow/35 animate-float" 
          size={32} 
          style={{ animationDelay: "7s", animationDuration: "10s" }}
        />
        <Coffee 
          className="absolute bottom-[20%] left-[75%] text-primary/30 animate-float" 
          size={26} 
          style={{ animationDelay: "8s", animationDuration: "8s" }}
        />
        <Zap 
          className="absolute bottom-[15%] left-[60%] text-primary-glow/40 animate-float" 
          size={24} 
          style={{ animationDelay: "9s", animationDuration: "11s" }}
        />
        
        {/* Additional scattered icons for continuous movement */}
        <Code 
          className="absolute top-[60%] left-[5%] text-primary/25 animate-float" 
          size={20} 
          style={{ animationDelay: "10s", animationDuration: "13s" }}
        />
        <BookOpen 
          className="absolute top-[70%] right-[10%] text-primary-glow/30 animate-float" 
          size={22} 
          style={{ animationDelay: "11s", animationDuration: "9s" }}
        />
        <Brain 
          className="absolute top-[25%] left-[45%] text-primary/20 animate-float" 
          size={18} 
          style={{ animationDelay: "12s", animationDuration: "14s" }}
        />
        <Terminal 
          className="absolute bottom-[40%] right-[5%] text-primary-glow/25 animate-float" 
          size={20} 
          style={{ animationDelay: "13s", animationDuration: "8s" }}
        />
        <Lightbulb 
          className="absolute top-[80%] left-[40%] text-primary/35 animate-float" 
          size={24} 
          style={{ animationDelay: "14s", animationDuration: "10s" }}
        />
      </div>

      {/* Main auth card */}
      <div className="relative z-10">
        <AuthCard className="animate-in fade-in-0 zoom-in-95 duration-500">
          {isLogin ? (
            <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
          ) : (
            <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </AuthCard>
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
}