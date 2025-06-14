import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { compatibilityRequestSchema, type CompatibilityRequest } from "@shared/schema";
import { getTelegramUserId } from "@/lib/telegram";

interface CompatibilityFormProps {
  onSubmit: (data: CompatibilityRequest) => Promise<void>;
  isLoading: boolean;
  error?: string;
}

export function CompatibilityForm({ onSubmit, isLoading, error }: CompatibilityFormProps) {
  const form = useForm<CompatibilityRequest>({
    resolver: zodResolver(compatibilityRequestSchema),
    defaultValues: {
      person1Date: "",
      person1Time: "",
      person2Date: "",
      person2Time: "",
      telegramUserId: getTelegramUserId(),
    },
  });

  const formatDateInput = (value: string) => {
    let formatted = value.replace(/\D/g, '');
    if (formatted.length >= 2) {
      formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
    }
    if (formatted.length >= 5) {
      formatted = formatted.substring(0, 5) + '.' + formatted.substring(5, 9);
    }
    return formatted;
  };

  const formatTimeInput = (value: string) => {
    let formatted = value.replace(/\D/g, '');
    if (formatted.length >= 2) {
      formatted = formatted.substring(0, 2) + ':' + formatted.substring(2, 4);
    }
    return formatted;
  };

  const handleFormSubmit = async (data: CompatibilityRequest) => {
    await onSubmit(data);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <div className="aurora-gradient p-8 rounded-3xl glass-card hover-lift">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="text-5xl mb-3">🌟</div>
            <div className="absolute -top-2 -right-2 floating-heart">💫</div>
            <div className="absolute -bottom-2 -left-2 floating-heart" style={{ animationDelay: '1s' }}>✨</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Откройте тайны совместимости</h2>
          <p className="text-gray-600 leading-relaxed">Узнайте, что говорят звезды о ваших отношениях через астрологию и нумерологию</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Person 1 Data */}
          <Card className="neo-card hover-lift border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 magic-gradient rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">👤</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ваши данные</h3>
                  <p className="text-gray-500 text-sm">Введите информацию о себе</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="person1Date"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 font-medium">
                        Дата рождения
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ДД.ММ.ГГГГ"
                          maxLength={10}
                          className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                          onChange={(e) => {
                            const formatted = formatDateInput(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="person1Time"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 font-medium">
                        Время рождения
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ЧЧ:ММ"
                          maxLength={5}
                          className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                          onChange={(e) => {
                            const formatted = formatTimeInput(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Person 2 Data */}
          <Card className="bg-white shadow-sm border border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800">Данные партнера</h3>
              </div>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="person2Date"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 font-medium">
                        Дата рождения
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ДД.ММ.ГГГГ"
                          maxLength={10}
                          className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                          onChange={(e) => {
                            const formatted = formatDateInput(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="person2Time"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 font-medium">
                        Время рождения
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ЧЧ:ММ"
                          maxLength={5}
                          className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                          onChange={(e) => {
                            const formatted = formatTimeInput(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              <div className="flex items-center">
                <span className="mr-2">⚠️</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full telegram-gradient text-white py-4 px-6 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center">
              <span className="mr-2">✨</span>
              {isLoading ? "Анализируем..." : "Рассчитать совместимость"}
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
