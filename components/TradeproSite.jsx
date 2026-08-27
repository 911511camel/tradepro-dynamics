"use client";
import { OreProcessingFlow } from "./investment/OreProcessingFlow";
import {setLanguage,filterCoconut,handleQuoteSubmit,openModal,closeModal,selectProductForQuote,openInvestorModal,handleGenericSubmit,handleModalKeyDown} from "../lib/site-interactions";
export default function TradeproSite(){ return <>

  
  <header className="sticky top-0 z-50 glass-card border-b border-white/10 bg-deep-ocean/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 flex flex-wrap gap-3 py-3 items-center justify-between">
      
      <a href="#" className="flex items-center space-x-3 group">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-bio via-emerald-accent to-gold-sand flex items-center justify-center p-0.5 shadow-lg shadow-emerald-900/30">
          <div className="w-full h-full bg-deep-ocean rounded-full flex items-center justify-center">
            <span className="text-gold-sand font-bold text-lg tracking-tighter">TP</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-wider text-base uppercase leading-tight group-hover:text-gold-sand transition-colors">TradePro</span>
          <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Dynamics Corp.</span>
        </div>
      </a>

      
      <nav className="flex items-center gap-4 overflow-x-auto py-2 text-sm font-medium" aria-label="Main navigation">
        <a href="#coconut" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_coconut">Coconut Products</a>
        <a href="#commodities" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_commodities">Fruit & Commodities</a>
        <a href="#investment" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_investment">Investment (PPP)</a>
        <a href="#missions" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_missions">Missions & CSR</a>
        <a href="#about" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_media">Media</a>
        <a href="#about" className="text-gray-300 hover:text-white transition-colors" data-i18n="nav_about">About Us</a>
      </nav>

      
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-slate-marine rounded border border-white/10 p-0.5 text-xs font-mono">
          <button id="lang-en" onClick={() => setLanguage('en')} className="px-2.5 py-1 rounded bg-emerald-bio text-white font-bold transition-all">EN</button>
          <button id="lang-ru" onClick={() => setLanguage('ru')} className="px-2.5 py-1 rounded text-gray-400 hover:text-white transition-all">RU</button>
        </div>
        <button onClick={() => openModal('quote-modal')} className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded bg-gold-sand text-deep-ocean hover:bg-gold-premium transition-all shadow-md">
          <span data-i18n="btn_b2b_inquiry">B2B / Investor Gate</span>
        </button>
      </div>
    </div>
  </header>

  
  <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-deep-ocean to-deep-ocean pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-gold-sand/30 bg-gold-sand/10 text-gold-sand text-xs font-mono tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse"></span>
          <span data-i18n="hero_badge">Mindanao Gateway &middot; Global Logistics Operator</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6" data-i18n="hero_title">
          Institutional Scale. Direct Origin. Sustainable Global Trade.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8" data-i18n="hero_desc">
          TradePro Dynamics Corp. bridges high-yield Philippine agro-industrial resources, mineral refining capacities, and strategic deep-sea ports with institutional buyers across East Asia, the Middle East, CIS, EU, and Americas.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#coconut" className="px-6 py-3 rounded bg-emerald-bio text-white text-sm font-semibold tracking-wider uppercase hover:bg-emerald-accent transition-all shadow-lg shadow-emerald-950/50" data-i18n="btn_explore_catalog">
            Explore Product Catalog
          </a>
          <a href="#investment" className="px-6 py-3 rounded glass-card text-gold-sand text-sm font-semibold tracking-wider uppercase hover:border-gold-sand transition-all" data-i18n="btn_view_ppp">
            Strategic PPP Projects
          </a>
        </div>
      </div>

      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded">
          <div className="text-2xl font-bold font-mono text-white">48 Hours</div>
          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1" data-i18n="metric_fresh">Harvest-to-Oil Standard</div>
        </div>
        <div className="glass-card p-4 rounded">
          <div className="text-2xl font-bold font-mono text-emerald-accent">100+ T/Day</div>
          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1" data-i18n="metric_export">Fruit Export Volume</div>
        </div>
        <div className="glass-card p-4 rounded">
          <div className="text-2xl font-bold font-mono text-gold-sand">20,000 m²</div>
          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1" data-i18n="metric_port">Malalag Maritime Hub</div>
        </div>
        <div className="glass-card p-4 rounded">
          <div className="text-2xl font-bold font-mono text-white">15,000+</div>
          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1" data-i18n="metric_csr">Patients Treated (CSR)</div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="coconut" className="py-20 border-b border-white/10 bg-slate-marine/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-accent" data-i18n="sec1_tag">Section 01 // Industrial & Food Solutions</span>
          <h2 className="text-3xl font-bold text-white mt-1" data-i18n="sec1_title">100% Organic Philippine Coconut Products</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl" data-i18n="sec1_sub">Standardized under the Fresh-Centrifuged Way: Zero chemical alteration, 0% RBD, preserving up to 50% Lauric Acid.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <button onClick={() => filterCoconut('all')} className="coco-btn px-3 py-1.5 text-xs rounded bg-emerald-bio text-white font-mono" data-filter="all">ALL</button>
          <button onClick={() => filterCoconut('food')} className="coco-btn px-3 py-1.5 text-xs rounded glass-card text-gray-300 font-mono hover:text-white" data-filter="food">FOOD & BULK</button>
          <button onClick={() => filterCoconut('pharma')} className="coco-btn px-3 py-1.5 text-xs rounded glass-card text-gray-300 font-mono hover:text-white" data-filter="pharma">COSMETIC & PHARMA</button>
          <button onClick={() => filterCoconut('agri')} className="coco-btn px-3 py-1.5 text-xs rounded glass-card text-gray-300 font-mono hover:text-white" data-filter="agri">AGRI / SUBSTRATES</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="coconut-grid">
        
        <div className="glass-card glass-card-hover p-6 rounded flex flex-col justify-between" data-cat="food pharma">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-bio/20 text-emerald-accent border border-emerald-bio/30">FRESH-CENTRIFUGED</span>
              <span className="text-xs font-mono text-gray-400">USDA / EU BIO</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2" data-i18n="p1_name">Organic Virgin Coconut Oil (VCO)</h3>
            <p className="text-xs text-gray-400 mb-4" data-i18n="p1_desc">Cold centrifuge extraction within 48h from harvest. Water-clear clarity, subtle natural aroma, zero peroxide value.</p>
            <div className="border-t border-white/5 pt-3 mb-4 text-xs font-mono space-y-1 text-gray-300">
              <div>&bull; Bulk: 200L Steel/Plastic Drums, 1000L IBC</div>
              <div>&bull; Retail / Private Label: 300ml, 500ml, 1L Glass</div>
            </div>
          </div>
          <button onClick={() => selectProductForQuote('Organic Virgin Coconut Oil (VCO)')} className="w-full py-2 text-xs font-semibold uppercase tracking-wider bg-slate-marine hover:bg-emerald-bio text-white rounded border border-white/10 transition-colors" data-i18n="btn_req_quote">Request B2B Quote</button>
        </div>

        
        <div className="glass-card glass-card-hover p-6 rounded flex flex-col justify-between" data-cat="food">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-bio/20 text-emerald-accent border border-emerald-bio/30">ASEPTIC PACK</span>
              <span className="text-xs font-mono text-gray-400">HALAL / ISO22000</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2" data-i18n="p2_name">Coconut Water & Cream Bulk</h3>
            <p className="text-xs text-gray-400 mb-4" data-i18n="p2_desc">Pure natural isotonic liquid & high-fat culinary coconut cream. Flash pasteurized, retaining complete electrolyte profile.</p>
            <div className="border-t border-white/5 pt-3 mb-4 text-xs font-mono space-y-1 text-gray-300">
              <div>&bull; Bulk: 200L Aseptic Bags in Drums, 20MT ISO Tanks</div>
              <div>&bull; Shelf Life: 18–24 Months Unopened</div>
            </div>
          </div>
          <button onClick={() => selectProductForQuote('Coconut Water & Cream Bulk')} className="w-full py-2 text-xs font-semibold uppercase tracking-wider bg-slate-marine hover:bg-emerald-bio text-white rounded border border-white/10 transition-colors" data-i18n="btn_req_quote">Request B2B Quote</button>
        </div>

        
        <div className="glass-card glass-card-hover p-6 rounded flex flex-col justify-between" data-cat="agri">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-sand/20 text-gold-sand border border-gold-sand/30">AGRO-INDUSTRIAL</span>
              <span className="text-xs font-mono text-gray-400">HIGH EC / LOW EC</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2" data-i18n="p3_name">Coir Fibre & Coco Peat Substrate</h3>
            <p className="text-xs text-gray-400 mb-4" data-i18n="p3_desc">Compressed 5kg blocks & grow-bags for industrial greenhouses and hydroponics. Washed and unwashed grades.</p>
            <div className="border-t border-white/5 pt-3 mb-4 text-xs font-mono space-y-1 text-gray-300">
              <div>&bull; Packaging: 5kg Blocks (Palletized), 650g Briquettes</div>
              <div>&bull; Loadability: 24–26 MT per 40ft HC Container</div>
            </div>
          </div>
          <button onClick={() => selectProductForQuote('Coir Fibre & Coco Peat Substrate')} className="w-full py-2 text-xs font-semibold uppercase tracking-wider bg-slate-marine hover:bg-emerald-bio text-white rounded border border-white/10 transition-colors" data-i18n="btn_req_quote">Request B2B Quote</button>
        </div>
      </div>
    </div>
  </section>

  
  <section id="commodities" className="py-20 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-sand" data-i18n="sec2_tag">Section 02 // Wholesale Agricultural Trade</span>
        <h2 className="text-3xl font-bold text-white mt-1" data-i18n="sec2_title">Export of Fresh Fruits, Dried Lines & Commodities</h2>
        <p className="text-gray-400 text-sm mt-2 max-w-2xl" data-i18n="sec2_sub">Operating out of Davao Port Hub with continuous Reefer Cold-Chain tracking to Middle East, East Asia, CIS and Europe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="glass-card p-5 rounded">
          <div className="text-xs font-mono text-emerald-accent mb-2">100+ TONS / DAY</div>
          <h4 className="text-base font-bold text-white mb-1" data-i18n="c1_title">Cavendish Bananas (Grade A)</h4>
          <p className="text-xs text-gray-400 mb-3" data-i18n="c1_desc">Class 4-5-6 hands, vacuum-packed in 13.5kg boxes. Year-round supply from Davao/Bukidnon plantations.</p>
          <span className="text-[11px] font-mono text-gold-sand">FOB Davao / CIF Global</span>
        </div>

        
        <div className="glass-card p-5 rounded">
          <div className="text-xs font-mono text-emerald-accent mb-2">SWEETEST VARIETY</div>
          <h4 className="text-base font-bold text-white mb-1" data-i18n="c2_title">Carabao Mango (Fresh & Dried)</h4>
          <p className="text-xs text-gray-400 mb-3" data-i18n="c2_desc">Fresh calibrated fruit (50-60cm) & Grade A dried mango slices in 20kg export master cartons (4x5kg).</p>
          <span className="text-[11px] font-mono text-gold-sand">Air Freight / Sea Reefer</span>
        </div>

        
        <div className="glass-card p-5 rounded">
          <div className="text-xs font-mono text-emerald-accent mb-2">SINGLE ORIGIN</div>
          <h4 className="text-base font-bold text-white mb-1" data-i18n="c3_title">Fine-Flavor Cacao & Coffee</h4>
          <p className="text-xs text-gray-400 mb-3" data-i18n="c3_desc">Fermented solar-dried Mindanao cacao beans (Criollo/Trinitario hybrids) and high-altitude green coffee beans.</p>
          <span className="text-[11px] font-mono text-gold-sand">60kg Jute Bags (GrainPro)</span>
        </div>

        
        <div className="glass-card p-5 rounded">
          <div className="text-xs font-mono text-emerald-accent mb-2">COMMODITY BULK</div>
          <h4 className="text-base font-bold text-white mb-1" data-i18n="c4_title">Raw Cane & Coconut Sugar</h4>
          <p className="text-xs text-gray-400 mb-3" data-i18n="c4_desc">Non-GMO unrefined cane sugar and Low-GI (GI 35) granulated coconut palm blossom sugar in 25kg/50kg multi-wall bags.</p>
          <span className="text-[11px] font-mono text-gold-sand">FCL 20ft / 40ft Supply</span>
        </div>
      </div>

      
      <div className="glass-card p-6 md:p-8 rounded border border-emerald-bio/30 bg-slate-marine/60">
        <div className="max-w-3xl mb-6">
          <h3 className="text-lg font-bold text-white" data-i18n="calc_title">Interactive B2B Batch Calculator & Quote Generator</h3>
          <p className="text-xs text-gray-400 mt-1" data-i18n="calc_desc">Calculate approximate loadability and submit immediate request for official Proforma Invoice & COA.</p>
        </div>

        <form id="calculator-form" onSubmit={(event) => handleQuoteSubmit(event)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1" data-i18n="lbl_product" htmlFor="calc-product">Product Line</label><select id="calc-product" className="w-full bg-deep-ocean border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-emerald-accent outline-none">
              <option value="Cavendish Bananas">Cavendish Bananas (Fresh)</option>
              <option value="Carabao Dried Mango">Dried Mango (20kg Boxes)</option>
              <option value="Virgin Coconut Oil">Virgin Coconut Oil (VCO Bulk)</option>
              <option value="Fine Cacao Beans">Fine-Flavor Cacao Beans</option>
              <option value="Coco Peat Substrate">Coco Peat Substrate Blocks</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1" data-i18n="lbl_volume" htmlFor="calc-volume">Target Volume</label><select id="calc-volume" className="w-full bg-deep-ocean border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-emerald-accent outline-none">
              <option value="1x 20ft FCL">1x 20ft FCL (~15-18 MT)</option>
              <option value="1x 40ft Reefer/HC">1x 40ft HC / Reefer (~22-26 MT)</option>
              <option value="5+ Containers / Month">5+ Containers / Month (Contract)</option>
              <option value="LCL / Trial Order">LCL / Trial Airfreight</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1" data-i18n="lbl_incoterms" htmlFor="calc-incoterm">Incoterms Basis</label><select id="calc-incoterm" className="w-full bg-deep-ocean border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-emerald-accent outline-none">
              <option value="FOB Davao">FOB Port of Davao</option>
              <option value="CIF Middle East (Jebel Ali / Dammam)">CIF Middle East (Jebel Ali / Dammam)</option>
              <option value="CIF East Asia (Shanghai / Busan)">CIF East Asia (Shanghai / Busan)</option>
              <option value="CIF Europe (Rotterdam / Hamburg)">CIF Europe (Rotterdam / Hamburg)</option>
              <option value="CIF Vladivostok / St. Petersburg">CIF Russia (Vladivostok / SPb)</option>
            </select>
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full py-2 px-4 rounded bg-emerald-bio hover:bg-emerald-accent text-white text-xs font-semibold uppercase tracking-wider transition-all">
              <span data-i18n="btn_submit_quote">Generate Quote</span>
            </button>
          </div>
        </form>
        <div id="calc-result" className="hidden mt-4 p-3 rounded bg-emerald-950/40 border border-emerald-accent/30 text-xs text-emerald-300 font-mono"></div>
      </div>
    </div>
  </section>

  
  <section id="investment" className="py-20 border-b border-white/10 bg-slate-marine/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-sand" data-i18n="sec3_tag">Section 03 // Capital Projects & Institutional Gateway</span>
        <h2 className="text-3xl font-bold text-white mt-1" data-i18n="sec3_title">Strategic Infrastructure & Mineral Processing Hubs</h2>
        <p className="text-gray-400 text-sm mt-2 max-w-2xl" data-i18n="sec3_sub">Public-Private Partnership (PPP) assets structured under regulatory coordination with MinDA, PPA, and Local Government Units.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="glass-card p-6 rounded border-l-4 border-l-gold-sand">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-mono text-gold-sand">DAVAO DEL SUR</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">PPP CONCESSION</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="inv1_title">Malalag Port Logistics & Maritime Hub</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="inv1_desc">Development of up to 20,000 m² deep-water protected bay port area. Establishing dry storage warehouses, cold-chain reefer terminals for agro-exports, and vessel bunkering facilities.</p>
          <div className="bg-deep-ocean/50 p-3 rounded text-xs font-mono space-y-1 mb-4 text-gray-400">
            <div>&bull; Total Land Area: 10,000 m² core + 10,000 m² expansion</div>
            <div>&bull; Key Incentive: Provincial Tax Holidays & MinDA support</div>
          </div>
          <button onClick={() => openInvestorModal('Malalag Port Logistics Hub')} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-sand border border-gold-sand/40 hover:bg-gold-sand hover:text-deep-ocean rounded transition-all" data-i18n="btn_req_teaser">Request Investment Teaser</button>
        </div>

        
        <div className="glass-card p-6 rounded border-l-4 border-l-gold-sand">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-mono text-gold-sand">NORTHERN MINDANAO</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">INDUSTRIAL HUB</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="inv2_title">Iligan Industrial Port & Logistics Park</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="inv2_desc">Multimodal integration connecting heavy manufacturing (metallurgy, construction materials, chemical processing) with direct bulk-cargo and container vessel shipping berths.</p>
          <div className="bg-deep-ocean/50 p-3 rounded text-xs font-mono space-y-1 mb-4 text-gray-400">
            <div>&bull; Infrastructure: Bulk cargo terminals & customs bonded area</div>
            <div>&bull; Advantage: Direct deep-sea route bypassing congested nodes</div>
          </div>
          <button onClick={() => openInvestorModal('Iligan Industrial Port Park')} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-sand border border-gold-sand/40 hover:bg-gold-sand hover:text-deep-ocean rounded transition-all" data-i18n="btn_req_teaser">Request Investment Teaser</button>
        </div>

        
        <div className="glass-card p-6 rounded border-l-4 border-l-emerald-accent">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-mono text-emerald-accent">HIGH VALUE REFINING</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">MINERAL VALUE-ADD</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="inv3_title">Copper & Gold Ore Processing Complex</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="inv3_desc">Transitioning from raw ore export to on-island flotation and refining. Producing high-purity Cathode Copper for the EV/electronics supply chain and gold bars delivered directly to Bangko Sentral ng Pilipinas (BSP).</p>
          <div className="bg-deep-ocean/50 p-3 rounded text-xs font-mono space-y-1 mb-4 text-gray-400">
            <div>&bull; Products: 99.99% Cu Cathodes + Gold Dore / Bullion</div>
            <div>&bull; Offtake: Guaranteed statutory BSP monetization channel</div>
          </div>
          <button onClick={() => openInvestorModal('Copper & Gold Refinery Complex')} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-accent border border-emerald-accent/40 hover:bg-emerald-accent hover:text-deep-ocean rounded transition-all" data-i18n="btn_req_teaser">Request Investment Teaser</button>
        </div>

        
        <div className="glass-card p-6 rounded border-l-4 border-l-emerald-accent">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-mono text-emerald-accent">EV BATTERY RAW MATERIALS</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">BOI INCENTIVES</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="inv4_title">Nickel Ore High-Pressure Acid Leach / MHP Plant</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="inv4_desc">Advanced hydrometallurgical plant producing Mixed Hydroxide Precipitate (MHP) and Nickel Matte, addressing global automotive battery cell manufacturing demand.</p>
          <div className="bg-deep-ocean/50 p-3 rounded text-xs font-mono space-y-1 mb-4 text-gray-400">
            <div>&bull; Products: Battery-grade MHP, Nickel Matte, Co-precipitates</div>
            <div>&bull; Strategic Fit: Aligned with Philippine Green Metal Policy</div>
          </div>
          <button onClick={() => openInvestorModal('Nickel Ore Refinery (MHP)')} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-accent border border-emerald-accent/40 hover:bg-emerald-accent hover:text-deep-ocean rounded transition-all" data-i18n="btn_req_teaser">Request Investment Teaser</button>
        </div>
      </div>
    </div>
  <div className="max-w-7xl mx-auto px-4 pb-12"><OreProcessingFlow /></div></section>

  
  <section id="missions" className="py-20 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-accent" data-i18n="sec4_tag">Section 04 // Social Responsibility & Humanitarian Diplomacy</span>
        <h2 className="text-3xl font-bold text-white mt-1" data-i18n="sec4_title">Education & Healthcare Without Borders</h2>
        <p className="text-gray-400 text-sm mt-2 max-w-2xl" data-i18n="sec4_sub">Structured international humanitarian programs combining international teacher exchanges, medical missions, and community support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-card p-6 rounded">
          <div className="text-xs font-mono text-gold-sand mb-2">EDUCATIONAL DIPLOMACY</div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="csr1_title">Coastal English School & Academic Exchange</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="csr1_desc">Cross-border educational initiatives between Russia and the Philippines. Coastal resort-based immersion campuses for intensive English language training, IELTS preparation, and professional educator exchange programs.</p>
          <ul className="text-xs font-mono text-gray-400 space-y-1 mb-6">
            <li>&check; Youth Summer/Winter Linguistic Camps</li>
            <li>&check; Corporate & Logistics English for Global Trade</li>
            <li>&check; Teacher Training & International Certification</li>
          </ul>
          <button onClick={() => openModal('csr-modal')} className="px-4 py-2 rounded bg-slate-marine hover:bg-emerald-bio text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors" data-i18n="btn_join_edu">Partner as Educational Body</button>
        </div>

        
        <div className="glass-card p-6 rounded">
          <div className="text-xs font-mono text-emerald-accent mb-2">HUMANITARIAN HEALTHCARE</div>
          <h3 className="text-xl font-bold text-white mb-2" data-i18n="csr2_title">Medical Missions: Cagayan & Mindanao</h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed" data-i18n="csr2_desc">Mobile medical brigades delivering free specialized healthcare, surgical screenings, and medical supplies to underserved communities in Sanchez Mira (Cagayan) and rural Mindanao.</p>
          <ul className="text-xs font-mono text-gray-400 space-y-1 mb-6">
            <li>&check; Doctors from Russia, Philippines & Africa</li>
            <li>&check; Full Board & Official State Humanitarian Certification</li>
            <li>&check; 15,000+ Rural Patients Served to Date</li>
          </ul>
          <button onClick={() => openModal('csr-modal')} className="px-4 py-2 rounded bg-slate-marine hover:bg-emerald-bio text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors" data-i18n="btn_join_med">Volunteer as Medical Specialist</button>
        </div>
      </div>
    </div>
  </section>

  
  <section id="about" className="py-20 border-b border-white/10 bg-slate-marine/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        
        <div className="lg:col-span-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-sand" data-i18n="sec5_tag">Section 05 // Corporate Governance</span>
          <h2 className="text-3xl font-bold text-white mt-1 mb-4" data-i18n="sec5_title">About TradePro Dynamics Corp.</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4" data-i18n="about_p1">
            TradePro Dynamics Corp. is a premier Philippine-based international trading, brokerage, and investment facilitation conglomerate. We specialize in supply chain orchestration, high-volume agricultural export, and developing public-private infrastructure in key economic corridors.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-8" data-i18n="about_p2">
            <strong>Executive Leadership:</strong> Kristofferson P. Elma (President). Operating with rigorous institutional governance, full compliance with Philippine export regulations (BPI, FDA, PPA), and long-term PPP framework agreements.
          </p>

          
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4" data-i18n="stakeholders_title">Institutional Stakeholders & Regulatory Alignment</h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded bg-deep-ocean border border-white/10 text-gray-300">Mindanao Development Authority (MinDA)</span>
              <span className="px-3 py-1 rounded bg-deep-ocean border border-white/10 text-gray-300">Philippine National Oil Company (PNOC)</span>
              <span className="px-3 py-1 rounded bg-deep-ocean border border-white/10 text-gray-300">Provincial Government of Davao del Sur</span>
              <span className="px-3 py-1 rounded bg-deep-ocean border border-white/10 text-gray-300">City Government of Iligan</span>
              <span className="px-3 py-1 rounded bg-deep-ocean border border-white/10 text-gray-300">Philippine Ports Authority (PPA)</span>
            </div>
          </div>
        </div>

        
        <div className="glass-card p-6 rounded border border-gold-sand/30">
          <h3 className="text-lg font-bold text-white mb-4" data-i18n="hq_title">Direct Head Office</h3>
          <div className="space-y-3 text-xs text-gray-300 font-mono">
            <div>
              <span className="text-gray-500 block">HEADQUARTERS:</span>
              <span>Door 1 Sato Bldg, Quimpo Blvd., Ecoland, Davao City, 8000, Philippines</span>
            </div>
            <div>
              <span className="text-gray-500 block">PRIMARY EMAIL:</span>
              <a href="mailto:tradeprodynamics@gmail.com" className="text-emerald-accent hover:underline">tradeprodynamics@gmail.com</a>
            </div>
            <div>
              <span className="text-gray-500 block">DIRECT HOTLINES:</span>
              <div>+63 960 475 8965</div>
              <div>+63 930 661 5477</div>
            </div>
            <div>
              <span className="text-gray-500 block">PRIMARY LOGISTICS NODES:</span>
              <span>Port of Davao &middot; Malalag Bay &middot; Port of Iligan</span>
            </div>
          </div>
          <button onClick={() => openModal('quote-modal')} className="w-full mt-6 py-2.5 rounded bg-gold-sand hover:bg-gold-premium text-deep-ocean font-bold text-xs uppercase tracking-wider transition-all" data-i18n="btn_contact_terminal">Contact Institutional Desk</button>
        </div>

      </div>
    </div>
  </section>

  
  <footer className="py-8 bg-deep-ocean border-t border-white/10 text-xs font-mono text-gray-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>&copy; 2026 TradePro Dynamics Corp. All Rights Reserved.</div>
      <div className="flex space-x-6">
        <a href="#coconut" className="hover:text-gray-300">Coconut Solutions</a>
        <a href="#investment" className="hover:text-gray-300">Investment Gate</a>
        <a href="#missions" className="hover:text-gray-300">Humanitarian Missions</a>
        <a href="#about" className="hover:text-gray-300">Compliance & ESG</a>
      </div>
    </div>
  </footer>

  

  
  <div id="quote-modal" role="dialog" aria-modal="true" aria-label="quote modal" onKeyDown={handleModalKeyDown} className="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="glass-card bg-deep-ocean border border-white/20 max-w-lg w-full rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
      <button aria-label="Close / Закрыть" onClick={() => closeModal('quote-modal')} className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono">&times;</button>
      <h3 className="text-lg font-bold text-white mb-2" data-i18n="modal_quote_title">B2B Commercial & Export Inquiry</h3>
      <p className="text-xs text-gray-400 mb-4" data-i18n="modal_quote_sub">Direct submission to TradePro Dynamics Corp. Export Sales Desk.</p>
      <form onSubmit={(event) => handleGenericSubmit(event, 'quote-modal')} className="space-y-3 text-xs">
        <div><label className="block mb-1" htmlFor="quote-name">Full Name / Имя</label><input id="quote-name" name="fullName" required className="w-full bg-slate-marine rounded p-2 mb-3" /><input type="hidden" name="incoterms" />
          <label className="block text-gray-300 mb-1" htmlFor="quote-product-input">Target Product / Specification</label><input name="product" type="text" id="quote-product-input" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-6">Company / Entity Name</label><input name="companyName" type="text" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-6"/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-7">Destination Country / Port</label><input name="country" type="text" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-7"/>
          </div>
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="field-8">Corporate Email</label><input name="corporateEmail" type="email" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-8"/>
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="field-9">Estimated Volume (Containers / Metric Tons)</label><input name="volume" type="text" placeholder="e.g. 2x 40ft FCL Monthly" className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-9"/>
        </div>
        <p role="status" aria-live="polite" data-submit-status="" />
<button type="submit" className="w-full py-2.5 rounded bg-emerald-bio hover:bg-emerald-accent text-white font-bold uppercase tracking-wider transition-colors mt-2">Submit Official Request</button>
      </form>
    </div>
  </div>

  
  <div id="investor-modal" role="dialog" aria-modal="true" aria-label="investor modal" onKeyDown={handleModalKeyDown} className="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="glass-card bg-deep-ocean border border-gold-sand/40 max-w-lg w-full rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
      <button aria-label="Close / Закрыть" onClick={() => closeModal('investor-modal')} className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono">&times;</button>
      <div className="text-[10px] font-mono text-gold-sand uppercase">Confidential Gateway</div>
      <h3 className="text-lg font-bold text-white mb-1" id="investor-project-title">Investment Teaser Request</h3>
      <p className="text-xs text-gray-400 mb-4">Request access to project financial models, MinDA alignment documentation, and execution master plans.</p>
      <form onSubmit={(event) => handleGenericSubmit(event, 'investor-modal')} className="space-y-3 text-xs">
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="field-10">Institutional Investor / Fund Name</label><input name="companyName" type="text" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-gold-sand"  id="field-10"/>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-11">Authorized Representative</label><input name="fullName" type="text" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-gold-sand"  id="field-11"/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-12">Corporate Email</label><input name="corporateEmail" type="email" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-gold-sand"  id="field-12"/>
          </div>
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="field-13">NDA Verification & Ticket Size</label><select name="ticketSize" className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-gold-sand" id="field-13">
            <option>$5M – $25M USD</option>
            <option>$25M – $100M USD</option>
            <option>$100M+ USD (Sovereign / Consortium)</option>
          </select>
        </div>
        <p role="status" aria-live="polite" data-submit-status="" />
<button type="submit" className="w-full py-2.5 rounded bg-gold-sand hover:bg-gold-premium text-deep-ocean font-bold uppercase tracking-wider transition-colors mt-2">Request Electronic NDA & Data Room</button>
      </form>
    </div>
  </div>

  
  <div id="csr-modal" role="dialog" aria-modal="true" aria-label="csr modal" onKeyDown={handleModalKeyDown} className="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="glass-card bg-deep-ocean border border-white/20 max-w-lg w-full rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
      <button aria-label="Close / Закрыть" onClick={() => closeModal('csr-modal')} className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono">&times;</button>
      <h3 className="text-lg font-bold text-white mb-2">Humanitarian & Educational Mission Intake</h3>
      <p className="text-xs text-gray-400 mb-4">Join our international medical brigades or educational exchange programs in Cagayan & Mindanao.</p>
      <form onSubmit={(event) => handleGenericSubmit(event, 'csr-modal')} className="space-y-3 text-xs">
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="field-14">Applicant / Organization Name</label><input name="fullName" type="text" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-14"/>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-15">Specialization / Discipline</label><input name="specialization" type="text" placeholder="e.g. Surgeon / English Educator" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-15"/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="field-16">Contact Email</label><input name="corporateEmail" type="email" required className="w-full bg-slate-marine border border-white/10 rounded p-2 text-white outline-none focus:border-emerald-accent"  id="field-16"/>
          </div>
        </div>
        <p role="status" aria-live="polite" data-submit-status="" />
<button type="submit" className="w-full py-2.5 rounded bg-emerald-bio hover:bg-emerald-accent text-white font-bold uppercase tracking-wider transition-colors mt-2">Submit Application</button>
      </form>
    </div>
  </div>

</>; }
