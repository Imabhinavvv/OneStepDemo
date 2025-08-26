"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"  
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx"
import { useIsMobile } from "@/hooks/use-mobile"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import { NavigationMenuDemo } from "./navbar-menu"
import { CollapsibleDemo } from "./navbar-hammenu"

const Header: React.FC = () => {
    const isMobile = useIsMobile()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        const token = Cookies.get("jwtToken")
        setIsLoggedIn(!!token)
    }, [])

    const handleLogin = (): void => {
        Cookies.set("jwtToken", "Hello")
        setIsLoggedIn(true)
    }

    const handleLogout = (): void => {
        Cookies.remove("jwtToken")
        setIsLoggedIn(false)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative">
                            <Image 
                                src="/One.svg" 
                                alt="OneStep logo" 
                                width={45} 
                                height={45}
                                className="transition-transform duration-200 hover:scale-105"
                            />
                        </div>
                        <span className="hidden sm:block text-xl font-bold text-gray-900 tracking-tight">
                            OneStep
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <>
                            <div className="flex-1 flex justify-center">
                                <NavigationMenuDemo />
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                {isLoggedIn ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="focus:outline-none ring-2 ring-transparent hover:ring-gray-200 rounded-full transition-all duration-200">
                                            <Avatar className="h-10 w-10 border-2 border-white shadow-md hover:shadow-lg transition-all duration-200">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 mt-2 bg-white border border-gray-200 shadow-xl rounded-lg">
                                            <DropdownMenuLabel className="font-semibold text-gray-700">
                                                My Account
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                                Profile
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                                Billing
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                                Team
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                                Subscription
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="hover:bg-red-50 cursor-pointer py-2">
                                                <Button 
                                                    variant="ghost" 
                                                    className="w-full justify-start p-0 h-auto text-red-600 hover:bg-transparent hover:text-red-700" 
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Button 
                                        variant="default" 
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                                        onClick={handleLogin}
                                    >
                                        Login / Register
                                    </Button>
                                )}
                            </div>
                        </>
                    )}

                    {/* Mobile Navigation */}
                    {isMobile && (
                        <div className="flex items-center space-x-3">
                            {isLoggedIn && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="focus:outline-none ring-2 ring-transparent hover:ring-gray-200 rounded-full transition-all duration-200">
                                        <Avatar className="h-9 w-9 border-2 border-white shadow-md">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 mt-2 mr-4 bg-white border border-gray-200 shadow-xl rounded-lg">
                                        <DropdownMenuLabel className="font-semibold text-gray-700">
                                            My Account
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                            Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                            Billing
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                            Team
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer py-2">
                                            Subscription
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="hover:bg-red-50 cursor-pointer py-2">
                                            <Button 
                                                variant="ghost" 
                                                className="w-full justify-start p-0 h-auto text-red-600 hover:bg-transparent hover:text-red-700" 
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        size="icon"
                                        className="h-10 w-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <RxHamburgerMenu className="h-5 w-5 text-gray-700" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="w-80 bg-white border-l border-gray-200">
                                    <SheetHeader className="pb-6">
                                        <SheetTitle className="text-left text-lg font-semibold text-gray-900">
                                            Navigation
                                        </SheetTitle>
                                    </SheetHeader>
                                    
                                    <div className="space-y-6">
                                        <CollapsibleDemo />
                                        
                                        {!isLoggedIn && (
                                            <div className="pt-4 border-t border-gray-200">
                                                <Button 
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                                                    onClick={handleLogin}
                                                >
                                                    <Link href="/login" className="w-full">
                                                        Login / Register
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header