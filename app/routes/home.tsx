import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
    const location =  useLocation()
    const {auth} = usePuterStore()
    const navigate = useNavigate()
    useEffect(() => {
        if(!auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    } , [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
       <section className="main-section">
        <div className="page-heading">
           <h1>Track Your Application</h1>
           <h2>Review Your Submission </h2>
           </div>
           {resumes.length > 0 && (
           <div className="resumes-section">
              {resumes.map( (resume) =>
                <ResumeCard resume= {resume} key= {resume.id}></ResumeCard>
              )}
            
            </div>)}
        </section> 
       
     </main>
} 
