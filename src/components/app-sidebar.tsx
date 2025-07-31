import { ChevronUp } from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarFooter,
} from '@/components/ui/sidebar'
import { Link, useLocation } from 'react-router-dom'
import { useGoogleAuth } from '@/hooks/useGoogleAuth'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from './ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useTheme } from './theme-provider'
import { ItemsRoutes } from '@/config/routes'

export function AppSidebar() {
	const { setTheme } = useTheme()
	const { user, logout } = useGoogleAuth()
	const location = useLocation()
	const handleClickSignOut = async () => {
		await logout()
	}

	return (
		<Sidebar collapsible="icon" className="mb-20">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{ItemsRoutes.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={location.pathname === item.url}>
										<Link to={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="w-full">
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<Avatar className="w-7 h-7">
										<AvatarImage src={user?.photoURL ?? undefined} />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									{user?.displayName || 'User'}
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
											<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuItem>
									<span>Account</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={handleClickSignOut}>
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
