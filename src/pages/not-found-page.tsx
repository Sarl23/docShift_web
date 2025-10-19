import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, AlertCircle } from 'lucide-react'
import { useGoogleAuth } from '@/hooks/useGoogleAuth'

export default function NotFoundPage() {
	const navigate = useNavigate()
	const { user } = useGoogleAuth()

	const handleGoHome = () => {
		if (user) {
			navigate('/dashboard')
		} else {
			navigate('/')
		}
	}

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="max-w-md w-full text-center space-y-8">
				{/* Icono de error */}
				<div className="relative">
					<div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center">
						<AlertCircle className="w-16 h-16 text-blue-600 dark:text-blue-400" />
					</div>
					<div className="absolute -top-2 -right-2 w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full blur-xl" />
					<div className="absolute -bottom-2 -left-2 w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full blur-xl" />
				</div>

				{/* Título 404 */}
				<div className="space-y-2">
					<h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
						404
					</h1>
					<h2 className="text-3xl font-bold text-foreground">
						Página no encontrada
					</h2>
					<p className="text-muted-foreground text-lg">
						Lo sentimos, la página que buscas no existe o ha sido movida.
					</p>
				</div>

				{/* Botones de acción */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						onClick={handleGoHome}
						size="lg"
						className="bg-blue-600 hover:bg-blue-700 text-white"
					>
						<Home className="w-5 h-5 mr-2" />
						{user ? 'Ir al Dashboard' : 'Ir al Inicio'}
					</Button>
					<Button
						onClick={handleGoBack}
						variant="outline"
						size="lg"
					>
						<ArrowLeft className="w-5 h-5 mr-2" />
						Volver atrás
					</Button>
				</div>

				{/* Información adicional */}
				<div className="pt-8 border-t border-border">
					<p className="text-sm text-muted-foreground">
						Si crees que esto es un error, por favor contacta al soporte.
					</p>
				</div>
			</div>
		</div>
	)
}
