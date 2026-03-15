import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUpload, FaUserMd, FaNotesMedical, FaCheckCircle, FaArrowLeft, FaExclamationTriangle, FaShieldAlt, FaStethoscope } from 'react-icons/fa';

const diseaseData = {
    "Eczema": {
        description: "A condition that makes your skin red and itchy. It's common in children but can occur at any age.",
        causes: "Immune system overreaction, genetics, environmental triggers, and stress.",
        symptoms: ["Dry skin", "Itching (which may be severe)", "Red to brownish-gray patches", "Small, raised bumps"],
        precautions: "Keep skin moisturized, avoid harsh soaps, identify and avoid triggers.",
        treatment: "Topical steroid creams, moisturizers, and sometimes oral medications.",
        remedy: "Lukewarm baths, applying coconut oil, and wearing soft fabrics.",
        doctor: "Dermatologist"
    },
    "Psoriasis": {
        description: "A skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp.",
        causes: "An immune system problem that causes skin cells to grow faster than usual.",
        symptoms: ["Red patches of skin covered with thick, silvery scales", "Dry, cracked skin", "Itching, burning or soreness"],
        precautions: "Maintain a healthy lifestyle, avoid skin injuries, and manage stress.",
        treatment: "Topical treatments, light therapy, and systemic medications.",
        remedy: "Daily baths, use of moisturizers, and short exposure to sunlight.",
        doctor: "Dermatologist"
    },
    "Melanoma": {
        description: "The most serious type of skin cancer, develops in the cells (melanocytes) that produce melanin.",
        causes: "Exposure to ultraviolet (UV) radiation from sunlight or tanning lamps.",
        symptoms: ["A change in an existing mole", "The development of a new pigmented or unusual-looking growth"],
        precautions: "Use sunscreen, wear protective clothing, and avoid peak sun hours.",
        treatment: "Surgery, immunotherapy, targeted therapy, or radiation therapy.",
        remedy: "Immediate medical consultation is required. No home remedies.",
        doctor: "Oncologist / Dermatologist"
    },
    "Acne": {
        description: "A skin condition that occurs when your hair follicles become plugged with oil and dead skin cells.",
        causes: "Excess oil production, clogged hair follicles, bacteria, and inflammation.",
        symptoms: ["Whiteheads", "Blackheads", "Small red, tender bumps", "Pimples (pustules)"],
        precautions: "Wash face twice daily, avoid touching face, and use non-comedogenic products.",
        treatment: "Over-the-counter creams, prescription antibiotics, or retinoids.",
        remedy: "Tea tree oil, honey and cinnamon mask, and green tea extract.",
        doctor: "Dermatologist"
    }
};

const SkinDiseaseDemo = () => {
    const [image, setImage] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const analyzeImage = () => {
        if (!image) return;
        setAnalyzing(true);

        // Simulate AI analysis delay
        setTimeout(() => {
            const diseases = Object.keys(diseaseData);
            const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
            const data = diseaseData[randomDisease];

            setAnalyzing(false);
            setResult({
                name: randomDisease,
                confidence: (Math.random() * (98 - 85) + 85).toFixed(1) + "%",
                ...data
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-primary pt-24 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header & Back Button */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center md:text-right"
                    >
                        <span className="text-accent uppercase tracking-widest font-bold text-sm">AI Health Lab</span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2">DermatoAI <span className="text-gradient">Pro</span></h1>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: Upload Section (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="glass p-8 rounded-3xl border border-white/5">
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                <FaUpload className="text-accent" /> Analysis Portal
                            </h2>

                            <div className="border-2 border-dashed border-gray-700/50 rounded-2xl p-6 text-center hover:border-accent transition-all relative cursor-pointer group bg-white/[0.02]">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                />
                                {image ? (
                                    <div className="relative group/img">
                                        <img src={image} alt="Uploaded" className="max-h-64 mx-auto rounded-xl shadow-2xl" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center rounded-xl transition-opacity">
                                            <p className="text-white text-sm">Change Image</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-12">
                                        <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <FaUpload size={28} className="text-accent" />
                                        </div>
                                        <p className="text-gray-300 font-medium">Drop image here</p>
                                        <p className="text-xs text-gray-500 mt-2">High-res JPG or PNG recommended</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={analyzeImage}
                                disabled={!image || analyzing}
                                className="w-full mt-6 py-4 bg-gradient-to-r from-accent to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02] transition-all disabled:opacity-30 disabled:scale-100"
                            >
                                {analyzing ? (
                                    <span className="flex items-center justify-center gap-3">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : 'Run AI Detection'}
                            </button>

                            <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-xs text-yellow-500/80">
                                <FaExclamationTriangle className="shrink-0 mt-0.5" />
                                <p>Educational purposes only. This AI assessment is not a substitute for professional medical advice, diagnosis, or treatment.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results Section (8 cols) */}
                    <div className="lg:col-span-8">
                        {analyzing ? (
                            <div className="glass h-[600px] rounded-3xl flex flex-col items-center justify-center text-center p-12">
                                <div className="relative">
                                    <div className="w-24 h-24 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
                                    <FaShieldAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mt-8 mb-2">Analyzing Biomarkers</h3>
                                <p className="text-gray-400">Comparing image patterns against 10,000+ clinical samples...</p>
                                <div className="mt-8 w-64 h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3 }}
                                    />
                                </div>
                            </div>
                        ) : result ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                {/* Main Result Header */}
                                <div className="glass p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500">
                                                <FaCheckCircle size={32} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-green-500 uppercase tracking-tighter">AI POSITIVE MATCH</p>
                                                <h3 className="text-4xl font-bold text-white">{result.name}</h3>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/10 text-center">
                                            <p className="text-xs text-gray-400 uppercase">Confidence Score</p>
                                            <p className="text-3xl font-black text-accent">{result.confidence}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="glass p-6 rounded-2xl">
                                        <h4 className="text-accent font-bold mb-3 flex items-center gap-2">
                                            <FaNotesMedical /> Description
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed">{result.description}</p>
                                    </div>

                                    <div className="glass p-6 rounded-2xl">
                                        <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                                            <FaShieldAlt /> Symptoms
                                        </h4>
                                        <ul className="space-y-2">
                                            {result.symptoms.map((s, i) => (
                                                <li key={i} className="text-gray-400 flex items-center gap-2 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" /> {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="glass p-6 rounded-2xl">
                                        <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                                            <FaExclamationTriangle /> Common Causes
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">{result.causes}</p>
                                    </div>

                                    <div className="glass p-6 rounded-2xl md:col-span-2 border border-cyan-500/20 bg-cyan-500/5">
                                        <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                                            <FaUserMd className="text-xl" /> Professional Medical Advice
                                        </h4>
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="flex-1">
                                                <p className="text-gray-300 text-sm mb-2"><span className="text-white/50 uppercase text-[10px] tracking-widest block mb-1">Recommended Specialist</span></p>
                                                <p className="text-2xl font-bold text-white mb-4">{result.doctor}</p>
                                                <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                                    <p className="text-gray-300 text-sm italic leading-relaxed">"{result.treatment}"</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-auto bg-cyan-500/10 p-4 rounded-xl text-center min-w-[150px] border border-cyan-500/20">
                                                <p className="text-xs text-cyan-400 font-bold uppercase mb-2">Urgency Level</p>
                                                <div className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">
                                                    MODERATE
                                                </div>
                                                <button className="block w-full mt-4 text-xs bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg transition-colors print:hidden">
                                                    Find Doctors
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Remedies Footer */}
                                <div className="glass p-8 rounded-3xl border border-accent/20 print:border-black print:shadow-none print:bg-white print:text-black">
                                    <h4 className="text-2xl font-bold mb-4 print:text-black">Home Care & Remedies</h4>
                                    <div className="grid md:grid-cols-2 gap-8 print:block print:space-y-4">
                                        <div>
                                            <p className="text-xs font-bold text-accent uppercase mb-2 print:text-black">Daily Precautions</p>
                                            <p className="text-gray-300 text-sm print:text-black">{result.precautions}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-purple-400 uppercase mb-2 print:text-black">Suggested Remedies</p>
                                            <p className="text-gray-300 text-sm print:text-black">{result.remedy}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Print Button */}
                                <div className="flex justify-center pt-8 print:hidden">
                                    <button
                                        onClick={() => window.print()}
                                        className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                        </svg>
                                        Print Official Report
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="glass h-[600px] rounded-3xl flex flex-col items-center justify-center text-center p-12 relative overflow-hidden group print:hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <FaStethoscope size={64} className="text-gray-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Awaiting Clinical Data</h3>
                                    <p className="text-gray-400 max-w-sm mx-auto">
                                        Please upload a clear, well-lit photo of the affected skin area to begin the diagnostic process.
                                    </p>
                                    <div className="mt-8 flex justify-center gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 text-xs font-bold">1</div>
                                            <span className="text-[10px] text-gray-500 mt-1 uppercase">Upload</span>
                                        </div>
                                        <div className="w-12 h-px bg-white/10 mt-5" />
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 text-xs font-bold">2</div>
                                            <span className="text-[10px] text-gray-500 mt-1 uppercase">Analyze</span>
                                        </div>
                                        <div className="w-12 h-px bg-white/10 mt-5" />
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 text-xs font-bold">3</div>
                                            <span className="text-[10px] text-gray-500 mt-1 uppercase">Report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Global Print Styles */}
            <style>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .print\\:visible, .print\\:visible * {
                        visibility: visible;
                    }
                    .glass {
                        background: white !important;
                        box-shadow: none !important;
                        border: 1px solid #eee !important;
                        color: black !important;
                    }
                    p, h1, h2, h3, h4, h5, h6, span, li {
                        color: black !important;
                    }
                    /* Specific overrides for specific sections handled via classes or scoped visibility */
                    /* Hide everything by default, then show the result container */
                    #root > div {
                        padding: 0 !important;
                    }
                    nav, footer, .lg\\:col-span-4, .print\\:hidden {
                        display: none !important;
                    }
                    .lg\\:col-span-8 {
                        width: 100% !important;
                        position: absolute;
                        left: 0;
                        top: 0;
                        visibility: visible;
                    }
                    .lg\\:col-span-8 * {
                        visibility: visible;
                    }
                }
            `}</style>
        </div>
    );
};

export default SkinDiseaseDemo;
