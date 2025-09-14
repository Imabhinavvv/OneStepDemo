"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import "./index.css"
import { 
    FacebookIcon, 
    TwitterIcon, 
    InstagramIcon, 
    LinkedinIcon, 
    YoutubeIcon, 
    MailIcon, 
    MapPinIcon, 
    PhoneIcon,
    ArrowUpIcon
} from "lucide-react"

interface FooterLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = "" }) => (
    <Link 
        href={href} 
        className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm leading-relaxed block py-1 hover:underline ${className}`}
    >
        {children}
    </Link>
)

interface FooterSectionProps {
    title: string
    children: React.ReactNode
    className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children, className = "" }) => (
    <div className={`space-y-4 ${className}`}>
        <h3 className="text-gray-900 font-semibold text-base mb-4 relative">
            {title}
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </h3>
        <div className="space-y-2">
            {children}
        </div>
    </div>
)

const Footer: React.FC = () => {
    const isMobile = useIsMobile()
    const [showScrollButton, setShowScrollButton] = useState(false)

    // Show/hide scroll button when user reaches bottom of page
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                const scrollTop = window.scrollY
                const windowHeight = window.innerHeight
                const documentHeight = document.documentElement.scrollHeight
                
                // Show button when user is near the bottom (within 200px of footer)
                const isNearBottom = scrollTop + windowHeight >= documentHeight - 200
                setShowScrollButton(isNearBottom)
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            // Check initial state
            handleScroll()
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = (): void => {
        // Check if window is available (client-side)
        if (typeof window === 'undefined') {
            return
        }
        
        // Check if we're already at the top
        if (window.scrollY === 0) {
            return
        }
        
        // Smooth scroll to top
        window.scrollTo({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        })
        
        // Fallback for older browsers or if smooth scroll fails
        setTimeout(() => {
            if (window.scrollY > 50) {
                // If still not at top after smooth scroll attempt, force scroll
                document.documentElement.scrollTop = 0
                document.body.scrollTop = 0
            }
        }, 100)
    }

    return (
        <footer className="bg-gray-50 text-gray-700 relative overflow-hidden border-t border-gray-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Scroll to Top Button - Footer Corner */}
            {showScrollButton && (
                <div className="absolute bottom-6 right-6 z-10">
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 group animate-fade-in"
                        aria-label="Scroll to top of page"
                        title="Scroll to top"
                        type="button"
                    >
                        <ArrowUpIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-active:scale-90" />
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
                    </button>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* Main Footer Content */}
                {!isMobile ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                        <FooterSection title="Quick Links">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/internships">Internships</FooterLink>
                            <FooterLink href="/courses">Courses</FooterLink>
                            <FooterLink href="/jobs">Jobs</FooterLink>
                            <FooterLink href="/roadmap">Roadmaps / Learning Tracks</FooterLink>
                            <FooterLink href="/guidance">Mentorship / Guidance</FooterLink>
                        </FooterSection>

                        <FooterSection title="Explore Opportunities">
                            <FooterLink href="/internships-for-students">Internships for Students</FooterLink>
                            <FooterLink href="/remote-internships">Remote Internships</FooterLink>
                            <FooterLink href="/jobs-for-freshers">Jobs for Freshers</FooterLink>
                            <FooterLink href="/trending-roles">Trending Roles</FooterLink>
                            <FooterLink href="/internships-with-stipend">Internships with Stipend</FooterLink>
                            <FooterLink href="/work-from-home">Work From Home Jobs</FooterLink>
                        </FooterSection>

                        <FooterSection title="Upskill with Purpose">
                            <FooterLink href="/full-stack-development-course">Learn Full Stack Development</FooterLink>
                            <FooterLink href="/data-analyst-course">Become a Data Analyst</FooterLink>
                            <FooterLink href="/digital-marketing-bootcamp">Digital Marketing Bootcamp</FooterLink>
                            <FooterLink href="/career-tracks">Structured Career Tracks</FooterLink>
                            <FooterLink href="/mock-interviews">Practice Interviews</FooterLink>
                            <FooterLink href="/certifications">Certification Portal</FooterLink>
                        </FooterSection>

                        <FooterSection title="Career Tools & Help">
                            <FooterLink href="/resume-builder">Resume Builder</FooterLink>
                            <FooterLink href="/roadmap">Career Roadmaps</FooterLink>
                            <FooterLink href="/mock-interview">Mock Interviews</FooterLink>
                            <FooterLink href="/guidance">Mentorship Sessions</FooterLink>
                            <FooterLink href="/placement-guidance">Placement Guidance</FooterLink>
                            <FooterLink href="/faq">Community Q&A</FooterLink>
                        </FooterSection>

                        <FooterSection title="For Companies">
                            <FooterLink href="/company/hire-interns">Hire Interns</FooterLink>
                            <FooterLink href="/company/hire-job-seekers">Hire Job Seekers</FooterLink>
                            <FooterLink href="/company/partner-with-us">Partner With Us</FooterLink>
                            <FooterLink href="/company/hire-ambassador">Campus Ambassador Hiring</FooterLink>
                            <FooterLink href="/company/company-reviews">Company Reviews</FooterLink>
                        </FooterSection>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-6 mb-12">
                        <FooterSection title="Quick Links">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/internships">Internships</FooterLink>
                            <FooterLink href="/courses">Courses</FooterLink>
                            <FooterLink href="/jobs">Jobs</FooterLink>
                        </FooterSection>
                        <FooterSection title="For Companies">
                            <FooterLink href="/company/hire-interns">Hire Interns</FooterLink>
                            <FooterLink href="/company/hire-job-seekers">Hire Job Seekers</FooterLink>
                            <FooterLink href="/company/partner-with-us">Partner With Us</FooterLink>
                        </FooterSection>
                    </div>
                )}

                {/* Secondary Links */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FooterSection title="Inside OneStep">
                            <FooterLink href="/insides/about">About Us</FooterLink>
                            <FooterLink href="/insides/our-story">Our Story</FooterLink>
                            <FooterLink href="/insides/careers">Careers @ OneStep</FooterLink>
                            <FooterLink href="/insides/blog">Blog & Resources</FooterLink>
                            <FooterLink href="/insides/media">Press / Media</FooterLink>
                            <FooterLink href="/insides/contact">Contact Us</FooterLink>
                        </FooterSection>

                        <FooterSection title="Legal & Support">
                            <FooterLink href="/legal/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink href="/legal/terms">Terms of Use</FooterLink>
                            <FooterLink href="/legal/refund-policy">Refund Policy</FooterLink>
                            <FooterLink href="/legal/report">Report an Issue</FooterLink>
                            <FooterLink href="/legal/support">Support Chat / Email</FooterLink>
                        </FooterSection>

                        <div className="space-y-6">
                            <FooterSection title="Connect With Us">
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                                        <FacebookIcon className="h-5 w-5" />
                                    </Link>
                                    
                                    <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">
                                        <InstagramIcon className="h-5 w-5" />
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-200">
                                        <LinkedinIcon className="h-5 w-5" />
                                    </Link>
                                    
                                </div>
                            </FooterSection>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <MailIcon className="h-4 w-4 text-gray-500" />
                                    <span>mylogintrails@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <PhoneIcon className="h-4 w-4 text-gray-500" />
                                    <span>+91 7569998462</span>
                                </div>
                                <div className="flex items-start space-x-2 text-sm text-gray-600">
                                    <MapPinIcon className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <span>Hyderabad, Telangana, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Section */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <Image 
                                src="/One.svg" 
                                alt="OneStep logo" 
                                width={40} 
                                height={40}
                                className="opacity-90"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">OneStep</h2>
                                <p className="text-sm text-gray-600">Toward a Better You</p>
                            </div>
                        </div>
                        
                        <div className="text-center md:text-right">
                            <p className="text-sm text-gray-600 mb-2">
                                Empowering careers through learning and opportunities
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs text-gray-500">
                                <span>Made for you</span>
                                <span>•</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} OneStep. All rights reserved. 
                        <span className="mx-2">|</span>
                        Building the future of career development.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-400"></div>

        </footer>
    )
}

export default Footer