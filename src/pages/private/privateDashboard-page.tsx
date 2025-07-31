import FeaturesSection from '@/sections/features-section'

const stats = [
	{ label: 'Usuarios', value: 1200 },
	{ label: 'En turno activo', value: 340 },
	{ label: 'En espera de activacion', value: 56 },
	{ label: 'Notas', value: 2 },
]

const PrivateDashboardPage: React.FC = () => {
	return (
		<>
			<div className="bg-background p-12">
				<h1 className="text-3xl font-bold mb-8">Dashboard</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div key={stat.label} className="rounded-lg shadow p-6 flex flex-col items-center">
							<h2 className="text-2xl font-semibold">{stat.value}</h2>
							<p className="mt-2">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
			<FeaturesSection />
		</>
	)
}

export default PrivateDashboardPage
