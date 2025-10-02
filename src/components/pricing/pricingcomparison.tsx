"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function PricingComparison() {
  const intl = useIntl();

  return (
    <section className="relative w-full bg-black text-white px-4 md:px-8 lg:px-12 py-4 overflow-hidden">
      {/* Título global */}
      <div className="text-center mb-10 md:mb-14 lg:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange">
          {intl.formatMessage({ id: "pricing.comparison.title" })}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/85 max-w-[1400px] mx-auto mt-2">
          {intl.formatMessage({ id: "pricing.comparison.subtitle" })}
        </h3>
      </div>

      {/* Contenedor con borde */}
      <div className="overflow-x-auto max-w-[110rem] mx-auto border-4 border-brand-purple rounded-2xl">
        <table className="min-w-[1024px] w-full border-collapse rounded-2xl overflow-hidden text-left">
          <thead>
            <tr className="bg-brand-blue/80 text-white text-lg md:text-xl">
              <th className="px-6 py-4 font-semibold">
                {intl.formatMessage({ id: "pricing.comparison.header.item" })}
              </th>
              <th className="px-6 py-4 font-semibold text-center">
                {intl.formatMessage({ id: "pricing.comparison.header.solitario" })}
              </th>
              <th className="px-6 py-4 font-semibold text-center">
                {intl.formatMessage({ id: "pricing.comparison.header.parlamento" })}
              </th>
              <th className="px-6 py-4 font-semibold text-center">
                {intl.formatMessage({ id: "pricing.comparison.header.manada" })}
              </th>
              <th className="px-6 py-4 font-semibold text-center">
                {intl.formatMessage({ id: "pricing.comparison.header.ecosistema" })}
              </th>
            </tr>
          </thead>
          <tbody className="text-base md:text-lg">
            {/* Fila 1 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row1.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row1.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row1.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row1.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row1.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 2 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row2.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row2.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row2.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row2.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row2.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 3 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row3.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row3.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row3.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row3.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row3.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 4 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row4.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row4.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row4.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row4.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row4.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 5 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row5.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row5.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row5.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row5.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row5.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 6 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row6.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row6.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row6.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row6.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row6.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 7 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row7.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row7.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row7.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row7.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row7.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 8 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row8.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row8.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row8.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row8.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row8.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 9 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row9.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row9.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row9.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row9.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row9.ecosistema" })}</td>
            </motion.tr>

            {/* Fila 10 */}
            <motion.tr whileHover={{ scale: 1.01, backgroundColor: "rgba(138, 43, 226, 0.15)" }} transition={{ duration: 0.2 }} className="border-t border-white/20">
              <td className="px-6 py-4 font-semibold text-brand-orange text-lg md:text-xl">{intl.formatMessage({ id: "pricing.comparison.row10.item" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row10.solitario" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row10.parlamento" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row10.manada" })}</td>
              <td className="px-6 py-4 text-center">{intl.formatMessage({ id: "pricing.comparison.row10.ecosistema" })}</td>
            </motion.tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
