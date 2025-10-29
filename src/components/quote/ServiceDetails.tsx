import React from 'react';
import { Calendar, Package, MapPin, Scale, Info, Truck, Ship, FileText, AlertTriangle } from 'lucide-react';

interface ServiceDetailsProps {
  serviceType: string;
  data: any;
  updateData: (data: any) => void;
}

function ServiceDetails({ serviceType, data, updateData }: ServiceDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  const renderFCLFields = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Sea Freight FCL - Full Container Load</h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          icon={MapPin}
          label="Country / Port of Loading"
          name="loading_country"
          type="text"
          value={data.loading_country || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Country / Port of Discharge"
          name="discharge_country"
          type="text"
          value={data.discharge_country || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Equipment Kind"
          name="equipment_kind"
          type="select"
          value={data.equipment_kind || ''}
          onChange={handleChange}
          options={[
            { value: '20 DC', label: '20 DC' },
            { value: '40 ST', label: '40 ST' },
            { value: '40 HC', label: '40 HC' }
          ]}
          required
        />
        <FormField
          icon={Package}
          label="Commodity"
          name="commodity"
          type="text"
          value={data.commodity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Quantity"
          name="quantity"
          type="number"
          value={data.quantity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Packing Kind"
          name="packing_kind"
          type="text"
          value={data.packing_kind || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Target Rate"
          name="target_rate"
          type="number"
          value={data.target_rate || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Calendar}
          label="Cargo Readiness Date"
          name="cargo_readiness_date"
          type="date"
          value={data.cargo_readiness_date || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Pick Up Address"
          name="pickup_address"
          type="text"
          value={data.pickup_address || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Delivery Address"
          name="delivery_address"
          type="text"
          value={data.delivery_address || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Inco Term"
          name="inco_term"
          type="select"
          value={data.inco_term || ''}
          onChange={handleChange}
          options={[
            { value: 'FOB', label: 'FOB' },
            { value: 'CIF', label: 'CIF' },
            { value: 'EXW', label: 'EXW' }
          ]}
          required
        />
        <FormField
          icon={Scale}
          label="Gross Weight"
          name="gross_weight"
          type="number"
          value={data.gross_weight || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Net Weight"
          name="net_weight"
          type="number"
          value={data.net_weight || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Refrigerated Goods</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            icon={Package}
            label="Reefer Equipment"
            name="reefer_equipment"
            type="select"
            value={data.reefer_equipment || ''}
            onChange={handleChange}
            options={[
              { value: '20 Reefer', label: '20 Reefer' },
              { value: '40 Reefer', label: '40 Reefer' }
            ]}
          />
          <FormField
            icon={Scale}
            label="Temperature"
            name="temperature"
            type="number"
            value={data.temperature || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="Setting (On/Off)"
            name="setting"
            type="text"
            value={data.setting || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="Humidity"
            name="humidity"
            type="text"
            value={data.humidity || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="Ventilation"
            name="ventilation"
            type="text"
            value={data.ventilation || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Special Equipment</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            icon={Package}
            label="Special Equipment"
            name="special_equipment"
            type="select"
            value={data.special_equipment || ''}
            onChange={handleChange}
            options={[
              { value: '20 Flat Rack', label: '20 Flat Rack' },
              { value: '40 Flat Rack', label: '40 Flat Rack' },
              { value: '20 Open Top', label: '20 Open Top' },
              { value: '40 Open Top', label: '40 Open Top' }
            ]}
          />
          <FormField
            icon={Package}
            label="Dimension"
            name="special_dimension"
            type="text"
            value={data.special_dimension || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="In Cage / Out Cage"
            name="in_cage_out_cage"
            type="text"
            value={data.in_cage_out_cage || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="Packing Type"
            name="special_packing_type"
            type="text"
            value={data.special_packing_type || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">DGR Goods (Dangerous Goods)</h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            icon={AlertTriangle}
            label="UN Number"
            name="un_number"
            type="text"
            value={data.un_number || ''}
            onChange={handleChange}
          />
          <FormField
            icon={AlertTriangle}
            label="IMO Class"
            name="imo_class"
            type="text"
            value={data.imo_class || ''}
            onChange={handleChange}
          />
          <FormField
            icon={Package}
            label="Packing Party"
            name="packing_party"
            type="text"
            value={data.packing_party || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <FormField
            icon={Info}
            label="Additional Instructions"
            name="additional_instructions"
            type="textarea"
            value={data.additional_instructions || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  const renderLCLFields = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Sea Freight LCL - Less than Container Load</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          icon={MapPin}
          label="Port of Loading"
          name="lcl_loading_port"
          type="text"
          value={data.lcl_loading_port || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Port of Discharge"
          name="lcl_discharge_port"
          type="text"
          value={data.lcl_discharge_port || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Commodity"
          name="lcl_commodity"
          type="text"
          value={data.lcl_commodity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Quantity"
          name="lcl_quantity"
          type="number"
          value={data.lcl_quantity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Dimension (L*W*H)"
          name="lcl_dimension"
          type="text"
          value={data.lcl_dimension || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="CBM (Cubic Meters)"
          name="lcl_cbm"
          type="number"
          value={data.lcl_cbm || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Calendar}
          label="Cargo Readiness"
          name="lcl_readiness"
          type="date"
          value={data.lcl_readiness || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Type of Packing"
          name="lcl_packing_type"
          type="text"
          value={data.lcl_packing_type || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Estimated Weight"
          name="lcl_estimated_weight"
          type="number"
          value={data.lcl_estimated_weight || ''}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderAirFreightFields = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Air Freight</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          icon={MapPin}
          label="Airport Loading"
          name="airport_loading"
          type="text"
          value={data.airport_loading || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Airport Discharge"
          name="airport_discharge"
          type="text"
          value={data.airport_discharge || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Commodity"
          name="air_commodity"
          type="text"
          value={data.air_commodity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Type of Packing"
          name="air_packing_type"
          type="text"
          value={data.air_packing_type || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Dimension (L*W*H)"
          name="air_dimension"
          type="text"
          value={data.air_dimension || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Chargeable Weight"
          name="air_chargeable_weight"
          type="number"
          value={data.air_chargeable_weight || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Estimated Weight"
          name="air_estimated_weight"
          type="number"
          value={data.air_estimated_weight || ''}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderRoadFreightFields = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Road Freight</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          icon={MapPin}
          label="Pickup Place"
          name="road_pickup"
          type="text"
          value={data.road_pickup || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={MapPin}
          label="Delivery Place"
          name="road_delivery"
          type="text"
          value={data.road_delivery || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Commodity"
          name="road_commodity"
          type="text"
          value={data.road_commodity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Goods Volume"
          name="road_goods_volume"
          type="text"
          value={data.road_goods_volume || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Package}
          label="Quantity"
          name="road_quantity"
          type="number"
          value={data.road_quantity || ''}
          onChange={handleChange}
          required
        />
        <FormField
          icon={Scale}
          label="Estimated Weight"
          name="road_estimated_weight"
          type="number"
          value={data.road_estimated_weight || ''}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderServiceFields = () => {
    switch (serviceType) {
      case 'Sea Freight FCL':
        return renderFCLFields();
      case 'Sea Freight LCL':
        return renderLCLFields();
      case 'Air Freight':
        return renderAirFreightFields();
      case 'Road Freight':
        return renderRoadFreightFields();
      default:
        return <p className="text-gray-500 text-center">Please select a service type first</p>;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
      {renderServiceFields()}
    </div>
  );
}

interface FormFieldProps {
  icon: React.ElementType;
  label: string;
  name: string;
  type: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
}

function FormField({ icon: Icon, label, name, type, value, onChange, options, required }: FormFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-orange-500" />
        </div>
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={4}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required={required}
          />
        ) : type === 'select' ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required={required}
          >
            <option value="">Select {label}</option>
            {options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required={required}
          />
        )}
      </div>
    </div>
  );
}

export default ServiceDetails;