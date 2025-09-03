export type LengthOfStayStatus = "doing" | "done" | "unfinished";

export type LengthOfStayItem = {
	startDate: Date;
	endDate: Date | null;
	institution: string;
	description: string;
	position: string;
	status?: LengthOfStayStatus;
};

export const getStatusOfLengthOfStay = (
	start: Date,
	end: Date | null,
): LengthOfStayStatus => {
	const now = new Date();

	if (end === null) {
		return "doing";
	}

	if (end < now) {
		return "done";
	}

	if (start > now) {
		return "unfinished";
	}

	return "doing";
};

type AboutMeData = {
	description: string;
	education: LengthOfStayItem[];
	experience: LengthOfStayItem[];
};

export const aboutMeData: AboutMeData = {
	description:
		"Desde 2013, entrei de cabeça no mundo do desenvolvimento, computadores podem fazer qualquer coisa ser realidade. Hoje, faço valer o meu lema montando soluções, guiando pessoas e fazendo entregas com altos padrões de qualidade de software em tempo recorde em lugares onde o tempo é um inimigo, sempre aperfeiçoando os métodos, desde o desenvolvimento ao deploy em diferentes clouds. Minha área e as minhas bases são computação, por tê-las sólidas, tenho facilidade e rapidez para assimilar novas tecnlogias e gerar valor aplicando-as, sendo que comecei no front, fui para o back e hoje me aventuro para além desses dois, provisionando recursos em diferentes infraestruturas com experiências colhidas em ambientes hiper dinâmicos e voláteis de startup. Visando impactar beneficamente a vida das pessoas, me tornei desenvolvedor web. Com uma breve e elucidativa passagem pelo mundo mais geral da computação, adquiri em pouco tempo grande paixão pela forma como a tecnologia pode alinhar os rumos da sociedade para melhor.",
	education: [
		{
			startDate: new Date(2018, 6, 1),
			endDate: new Date(2021, 5, 30),
			institution: "Universidade Estadual de Santa Cruz",
			position: "Bacharel em Ciência da Computação",
			description:
				"Graduação em Ciência da Computação com ênfase em desenvolvimento de software.",
			status: "unfinished",
		},
		{
			startDate: new Date(2023, 0, 1),
			endDate: new Date(2025, 11, 31),
			institution: "Estácio",
			position: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
			description:
				"Curso focado em desenvolvimento de sistemas, abrangendo desde a análise de requisitos até a implementação e manutenção de software.",
			status: "doing",
		},
	],
	experience: [
		{
			startDate: new Date(2022, 0, 1),
			endDate: new Date(2022, 5, 30),
			institution: "Hometech",
			position: "Desenvolvedor",
			description:
				"Desenvolvi soluções para o setor industrial, como controle de processos, automações, gerenciamento das plataformas internas da empresa (controle de estoque, infraestrutura on-premise, etc)",
		},
		{
			startDate: new Date(2022, 6, 1),
			endDate: new Date(2024, 6, 31),
			institution: "bebook",
			position: "Desenvolvedor",
			description:
				"Desenvolvi soluções para a rede hoteleira com inteligência de dados, gerenciamento de faturamento (RM), flutuação de tarifas com IA e integrações com canais de distribuição. \n\nRefinamento e arquitetura de soluções de softwares API REST com aplicações python ASGI e PHP, alinhamento da equipe desde o refinamento até a distribuição de demandas. \n\nMontagem de ambientes que seguem os melhores padrões de qualidade de software juntos ao Azure Devops, desenvolvimento ágil com documentações de código automatizadas e testes (incluídos em pipeline), linters e formatadores de código, ambientes de desenvolvimento dockerizados. \n\nCriação de recursos de frontend crus (nodejs e webpack) para desacoplamento de componentes em sistemas legados com disponibilidade em nuvem (CDN / Buckets). \n\nCriação de microserviços de ponta a ponta (do desenvolvimento ao deploy com aws lambda e azure functions). \n\nArquitetura e desenvolvimento de APIs e aplicação destinadas ao serviço e treino de modelos de Inteligência Artificial. \n\nExperiência com integrações de parceiros. \n\nConstrução de esteiras de ci/cd no Azure Devops, configuração de agentes de pipelines, Gerenciamento e provisionamento de recursos de infraestrutura como buckets, VPN (Wireguard e Open Vpn), bancos de dados, recursos FAAS, buckets, distribuídos entre AWS, Azure e GCP. \n\nContato com ETL, MLOps, data visualization. \n<br />",
		},
		{
			startDate: new Date(2024, 6, 1),
			endDate: null,
			institution: "simbi",
			position: "Desenvolvedor",
			description:
				"Desenvolvi soluções e assessoria de investimento para empresas optantes de renúncia fiscal através de leis de incentivo",
		},
	],
};
