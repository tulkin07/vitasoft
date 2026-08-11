"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/buttons/Button";
import { cn } from "@/lib/utils";

function useContactSchema() {
  const t = useTranslations("form.validation");

  return useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("name")),
        phone: z
          .string()
          .min(9, t("phone"))
          .regex(/^\+?[0-9\s-]+$/, t("phoneFormat")),
        email: z.string().email(t("email")),
        company: z.string().optional(),
        service: z.string().min(1, t("service")),
        budget: z.string().min(1, t("budget")),
        message: z.string().min(20, t("message")),
      }),
    [t]
  );
}

type ContactFormData = z.infer<ReturnType<typeof useContactSchema>>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("form");
  const tButtons = useTranslations("buttons");
  const contactSchema = useContactSchema();
  const serviceOptions = t.raw("select.serviceOptions") as string[];
  const budgetOptions = t.raw("select.budgetOptions") as string[];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-accent/25 bg-bg-card p-12 text-center">
        <CheckCircle className="h-10 w-10 text-accent" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">
          {t("success.title")}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-text-secondary">
          {t("success.description")}
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          {tButtons("newRequest")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("labels.name")} error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder={t("placeholders.name")}
            className={inputClass(errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label={t("labels.phone")} error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("placeholders.phone")}
            className={inputClass(errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("labels.email")} error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder={t("placeholders.email")}
            className={inputClass(errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label={t("labels.company")} error={errors.company?.message}>
          <input
            {...register("company")}
            type="text"
            placeholder={t("placeholders.company")}
            className={inputClass(errors.company)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("labels.service")} error={errors.service?.message}>
          <select
            {...register("service")}
            className={inputClass(errors.service)}
            aria-invalid={!!errors.service}
            defaultValue=""
          >
            <option value="" disabled>
              {t("select.placeholder")}
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("labels.budget")} error={errors.budget?.message}>
          <select
            {...register("budget")}
            className={inputClass(errors.budget)}
            aria-invalid={!!errors.budget}
            defaultValue=""
          >
            <option value="" disabled>
              {t("select.placeholder")}
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t("labels.message")} error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={t("placeholders.message")}
          className={cn(inputClass(errors.message), "resize-none")}
          aria-invalid={!!errors.message}
        />
      </Field>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tButtons("submitting")}
          </>
        ) : (
          t("submit")
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: { message?: string }) {
  return cn(
    "form-input w-full px-4 py-3.5 text-sm",
    error && "border-red-400/40"
  );
}
