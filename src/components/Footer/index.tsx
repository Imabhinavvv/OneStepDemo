"use client"

import Link from "next/link"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
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
import { Button } from "../ui/button"

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

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gray-50 text-gray-700 relative overflow-hidden border-t border-gray-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Scroll to Top Button */}
            <div className="flex justify-center py-6 border-b border-gray-200">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollToTop}
                    className="rounded-full bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-600 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    <ArrowUpIcon className="h-4 w-4" />
                </Button>
            </div>

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