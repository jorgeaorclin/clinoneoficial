import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, UserCheck, BarChart2, ClipboardList, Phone, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const metrics = [
    { title: "Triagens Realizadas", value: "328", icon: Users, description: "Último mês" },
    { title: "Taxa de Resolução", value: "87%", icon: CheckCircle, description: "Casos resolvidos" },
    { title: "Conformidade NR1", value: "94%", icon: TrendingUp, description: "vs. mês anterior" },
  ];

  const features = [
    {
      title: "Triagem Digital",
      description: "Questionário de rastreio rápido com algoritmo de pontuação de risco e agendamento prioritário inteligente.",
      link: "/triagem",
      icon: ClipboardList,
    },
    {
      title: "Teleorientação",
      description: "Protocolo de anamnese adaptado, visualização de sintomas e encaminhamento integrado one-click.",
      link: "/teleorientacao",
      icon: Phone,
    },
    {
      title: "Relatórios",
      description: "Dashboard de risco corporativo anonimizado e relatório de ações de prevenção.",
      link: "/relatorios",
      icon: BarChart3,
    },
  ];

  const complianceFeatures = [
    {
      title: "Segurança",
      description: "Dados protegidos e conformes com LGPD.",
      icon: Shield,
    },
    {
      title: "Gestão Integrada",
      description: "Acompanhamento completo do colaborador.",
      icon: UserCheck,
    },
    {
      title: "Analytics",
      description: "Insights para tomada de decisão.",
      icon: BarChart2,
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      <section className="rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 p-6 text-white shadow-xl">
        <div className="flex flex-col gap-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Plataforma NR1
          </div>
          <h1 className="text-3xl font-semibold leading-tight">Solução Digital para NR1</h1>
          <p className="text-sm text-emerald-50/90">
            Triagens inteligentes, teleorientação conectada e analytics para decisões rápidas em saúde ocupacional.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/triagem">
              <Button className="rounded-full bg-white px-6 py-3 text-emerald-600 hover:bg-white/90">
                Iniciar Triagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/relatorios">
              <Button variant="outline" className="rounded-full border-white/40 bg-white/10 px-6 py-3 text-white hover:bg-white/20 hover:text-white">
                Ver Relatórios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Painel rápido</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Indicadores-chave do último ciclo</p>
        <div className="mt-3 grid gap-3">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none bg-white/90 shadow-lg shadow-emerald-100/40 dark:bg-gray-900/80 dark:shadow-none">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">{metric.title}</p>
                  <div className="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">{metric.value}</div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{metric.description}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100/70 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <metric.icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Funcionalidades principais</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tudo o que sua equipe precisa para operar em campo e no corporativo.
          </p>
        </div>
        <div className="grid gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col gap-4 border-none bg-white/95 p-5 shadow-lg shadow-emerald-100/30 dark:bg-gray-900/85 dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100/70 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">{feature.title}</CardTitle>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              <Link to={feature.link}>
                <Button className="w-full rounded-2xl bg-emerald-600 py-3 text-white hover:bg-emerald-500">
                  Acessar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100/70 bg-emerald-50/60 p-6 shadow-lg shadow-emerald-100/50 dark:border-emerald-500/20 dark:bg-emerald-900/20 dark:shadow-none">
        <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">Conformidade com NR1</h2>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-200/80">
          Desenhado para atender à norma com processos digitais, trilhas de auditoria e monitoramento contínuo.
        </p>
        <div className="mt-5 grid gap-4">
          {complianceFeatures.map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 shadow-sm dark:bg-gray-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
