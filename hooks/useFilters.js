import React, { useContext, useEffect, useState } from "react";

export default function useFilters() {
  const [filters, setFilters] = useState({ filters: null });

  return { filters, setFilters };
}
