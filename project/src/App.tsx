import { useState } from 'react';
import { Camera, Bot, FileText, BarChart3, CheckCircle, Award, Mail, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        newsletter: formData.newsletter ? 'Oui' : 'Non',
        to_email: 'contact@securis-app.fr'
      };

      await emailjs.send(
        'service_9cg3hcd',
        'template_tjq02vr',
        templateParams,
        'HxTtJ2SkrfFlJjkgE'
      );

      alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
      setFormData({ name: '', company: '', email: '', message: '', newsletter: false });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@securis-app.fr');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/sécuriv logo v2.png" alt="Securis Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gray-900">Securis</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition">Accueil</button>
              <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-blue-600 transition">Vision</button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-blue-600 transition">Solution</button>
              <button onClick={() => scrollToSection('fonctionnalites')} className="text-gray-700 hover:text-blue-600 transition">Fonctionnalités</button>
              <button onClick={() => scrollToSection('partenariat')} className="text-gray-700 hover:text-blue-600 transition">Partenariat</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </nav>

            <button
              onClick={() => scrollToSection('partenariat')}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md"
            >
              Devenir partenaire
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Accueil</button>
              <button onClick={() => scrollToSection('vision')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Vision</button>
              <button onClick={() => scrollToSection('solution')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Solution</button>
              <button onClick={() => scrollToSection('fonctionnalites')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Fonctionnalités</button>
              <button onClick={() => scrollToSection('partenariat')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Partenariat</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Contact</button>
              <button
                onClick={() => scrollToSection('partenariat')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
              >
                Devenir partenaire
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Finaliste EDF Pulse 2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              L'IA qui veille sur la sécurité<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                et la qualité de vos chantiers
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Securis analyse, prévient et améliore la sécurité sur le terrain pour que chaque collaborateur rentre chez lui sain et sauf.
            </p>

            <button
              onClick={() => scrollToSection('solution')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Découvrir la solution
            </button>

            <div className="pt-12">
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Image1.png"
                    alt="Analyse des risques Securis"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Image2.png"
                    alt="Tableau de bord Securis"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Notre Vision</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Chaque jour, des milliers de professionnels s'exposent à des risques évitables.
            </p>
            <p>
              Chez <span className="font-semibold text-blue-600">Securis</span>, nous croyons qu'une IA bien entraînée peut sauver des vies.
            </p>
            <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Notre mission : rendre la sécurité intelligente, objective et accessible à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">La Solution Securis</h2>
            <p className="text-xl text-gray-600">Une plateforme complète pour la sécurité intelligente</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: 4 pillars */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Camera className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analyse IA sur photo</h3>
                    <p className="text-gray-600">Détecte automatiquement les dangers et non-conformités en temps réel.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <Bot className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Assistant Sécurité & Qualité</h3>
                    <p className="text-gray-600">Répond en temps réel aux questions du terrain avec précision.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Documents automatiques</h3>
                    <p className="text-gray-600">Génère PDP, PPSP, audits en un clic pour gagner du temps.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <BarChart3 className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard interactif</h3>
                    <p className="text-gray-600">Suit les non-conformités et indicateurs de sécurité en direct.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8">Les bénéfices concrets</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Sécurité proactive</h4>
                    <p className="text-blue-100">Anticipez les risques avant qu'ils ne deviennent des incidents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Conformité simplifiée</h4>
                    <p className="text-blue-100">Automatisez vos documents réglementaires sans effort.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Gain de temps et de fiabilité</h4>
                    <p className="text-blue-100">Réduisez les tâches administratives et concentrez-vous sur l'essentiel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="fonctionnalites" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Les avantages concrets</h2>
            <p className="text-xl text-gray-600">Des résultats mesurables sur vos chantiers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
              <p className="text-3xl font-bold text-gray-900 mb-4">Incidents évités</p>
              <p className="text-gray-600">Réduction des erreurs humaines grâce à la détection IA.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
              <p className="text-3xl font-bold text-gray-900 mb-4">Productivité</p>
              <p className="text-gray-600">Sur les audits sécurité et contrôles qualité.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
              <p className="text-3xl font-bold text-gray-900 mb-4">Traçabilité</p>
              <p className="text-gray-600">Toutes les actions correctives sont documentées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partenariat" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl text-white">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <Award className="w-6 h-6" />
                <span className="font-semibold text-lg">Finaliste EDF Pulse 2025</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">Ensemble, rendons les chantiers plus sûrs</h2>

              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Nous recherchons des partenaires techniques et industriels pour alimenter notre base de données IA et renforcer la détection des risques réels.
              </p>

              <p className="text-2xl font-semibold">
                Rejoignez-nous pour entraîner l'IA qui protège les travailleurs de demain.
              </p>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mt-4"
              >
                Devenir partenaire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Contactez-nous</h2>
            </div>
            <p className="text-xl text-gray-600">Intéressé par une collaboration ou une démonstration ?</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="votre.email@entreprise.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message / Type de partenariat souhaité *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Parlez-nous de votre projet ou de votre intérêt pour Securis..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
                />
                <label htmlFor="newsletter" className="ml-3 text-gray-700">
                  Je souhaite recevoir la présentation complète de Securis.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/sécuriv logo v2.png" alt="Securis Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold">Securis</span>
            </div>

            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                © 2025 Securis – Finaliste EDF Pulse Antilles-Guyane
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
                <a href="mailto:contact@securis-app.com" className="hover:text-blue-400 transition flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>contact@securis-app.fr</span>
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="http://www.securis-app.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  www.securis-app.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
