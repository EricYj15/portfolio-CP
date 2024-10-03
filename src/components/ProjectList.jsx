import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: 'Projeto 1', description: 'Um sistema de controle de estoque para pequenas empresas.', technologies: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, title: 'Projeto 2', description: 'Aplicativo de monitoramento em tempo real para eventos de corrida.', technologies: ['Node-RED', 'IoT', 'API'] },
];

const ProjectList = () => (
    <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6">Projetos</h1>
        {projects.map(project => (
            <div key={project.id} className="mt-4 text-center bg-gray-200 p-4 rounded shadow-md w-full max-w-lg">
                <Link to={`/projects/${project.id}`} className="text-xl text-blue-500 hover:underline font-semibold">{project.title}</Link>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">Tecnologias: {project.technologies.join(', ')}</p>
            </div>
        ))}
    </div>
);

export default ProjectList;
