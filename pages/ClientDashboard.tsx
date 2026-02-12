
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { FileText, Download, Clock, AlertCircle, LogOut } from 'lucide-react';

const COLORS = ['#003399', '#0056D2', '#93C5FD', '#E5E7EB'];

const CHART_DATA = [
  { name: 'Ejecutado', value: 65 },
  { name: 'Pendiente', value: 35 },
];

const BUDGET_DATA = [
  { name: 'Materiales', amount: 4000 },
  { name: 'Mano de Obra', amount: 3000 },
  { name: 'Logística', amount: 2000 },
  { name: 'Otros', amount: 1000 },
];

interface ClientDashboardProps {
  onLogout: () => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onLogout }) => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Cliente</h1>
            <p className="text-gray-500">Bienvenido, <span className="font-semibold text-primary">Ing. Roberto Gómez (Constructora Bolívar)</span></p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Proyecto Activo
            </div>
            <button 
                onClick={onLogout}
                className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors border border-red-200"
            >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Avance General</h3>
             <div className="text-3xl font-bold text-primary">65%</div>
             <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
               <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
             </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Próximo Hito</h3>
             <div className="text-lg font-bold text-gray-900">Entrega Fase 2</div>
             <div className="flex items-center gap-1 text-sm text-orange-500 mt-2">
               <Clock className="w-4 h-4" /> 12 Días Restantes
             </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Documentos</h3>
             <div className="text-3xl font-bold text-gray-900">24</div>
             <div className="text-sm text-gray-500 mt-1">3 Nuevos esta semana</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">Estado</h3>
             <div className="text-lg font-bold text-green-600">En Cronograma</div>
             <p className="text-xs text-gray-400 mt-2">Última act.: Hoy 09:00 AM</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Progress Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Desglose Presupuestal (Estimado)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BUDGET_DATA}>
                  <XAxis dataKey="name" fontSize={12} stroke="#9CA3AF" />
                  <YAxis fontSize={12} stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="amount" fill="#003399" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Estado de Entregables</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CHART_DATA}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Documentación Reciente</h3>
            <button className="text-sm text-primary font-bold hover:underline">Ver Todo</button>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { name: 'Informe_Tecnico_Octubre.pdf', date: '24 Oct 2023', type: 'PDF' },
              { name: 'Planos_Hidraulicos_Rev3.dwg', date: '22 Oct 2023', type: 'CAD' },
              { name: 'Presupuesto_Adicional.xlsx', date: '20 Oct 2023', type: 'Excel' },
              { name: 'Certificado_Calidad_Concreto.pdf', date: '18 Oct 2023', type: 'PDF' },
            ].map((doc, idx) => (
              <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-2 rounded-lg text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.date} • {doc.type}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Banner */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-primary">Mantenimiento Programado</h4>
            <p className="text-sm text-blue-800/80">
              La plataforma tendrá una breve interrupción por mantenimiento el próximo Domingo de 2:00 AM a 4:00 AM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
