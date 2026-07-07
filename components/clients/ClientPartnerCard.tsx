import type { ClientPartner } from "@/components/clients/client-data";

export default function ClientPartnerCard({ partner }: { partner: ClientPartner }) {
  return (
    <div className="border border-outline-variant/20 flex flex-col items-center justify-center py-lg px-md gap-md stagger-item group hover:border-primary-container/50 transition-colors bg-[#111111]">
      <div className="inline-flex items-center justify-center  border border-amber-50"
        style={{ backgroundColor: "white", height: "120px", width: "120px", borderRadius: "100px" }}>
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-20 w-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 group-hover:text-on-surface-variant transition-colors text-center">
        {partner.name}
      </p>
      <span className="text-label-sm text-primary-container/60">{partner.category}</span>
    </div>
  );
}
