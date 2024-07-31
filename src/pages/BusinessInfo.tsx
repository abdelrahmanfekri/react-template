import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import React from "react";

export default function BusinessInfo() {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t("businessInfo")}</h2>
      <div className="space-y-4">
        <InfoItem
          icon={<Building2 className="h-5 w-5 text-gray-500" />}
          label={t("companyName")}
          value="Femto AI"
        />
        <InfoItem
          icon={<Mail className="h-5 w-5 text-gray-500" />}
          label={t("email")}
          value="contact@femtoai.com"
        />
        <InfoItem
          icon={<Phone className="h-5 w-5 text-gray-500" />}
          label={t("phone")}
          value="+1 (123) 456-7890"
        />
        <InfoItem
          icon={<MapPin className="h-5 w-5 text-gray-500" />}
          label={t("address")}
          value="123 Tech Street, San Francisco, CA 94105"
        />
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      {icon}
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-base font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
