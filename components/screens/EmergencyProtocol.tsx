import { AlertTriangle } from 'lucide-react';

export function EmergencyProtocol() {
  return (
    <div className="px-12 mt-8">
      {/* Emergency Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-[32px] text-white">Emergency Protocol</h1>
          <div className="text-[12px] text-gray-400">Automated Response System</div>
        </div>
      </div>
      
      {/* Detection System Status Card */}
      <div className="bg-gray-800 border-l-4 border-l-emerald-500 rounded-xl p-8 mb-6">
        <div className="flex justify-between items-center mb-5">
          <div className="text-[14px] font-medium text-white">Detection System</div>
          <div className="bg-emerald-500 text-white text-[11px] px-3 py-1.5 rounded tracking-wider">
            ACTIVE
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-gray-400">Medical Event Detection</span>
            <span className="text-emerald-500">✓ Monitoring</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-gray-400">Collision Detection</span>
            <span className="text-emerald-500">✓ Active</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-gray-400">Loss of Control</span>
            <span className="text-emerald-500">✓ Tracking</span>
          </div>
        </div>
      </div>
      
      {/* Automatic Response Sequence Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-6">
        <div className="text-[14px] font-medium text-white mb-6">
          Automatic Response Sequence
        </div>
        
        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[14px] text-white">1</span>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">
                Hazard Lights Activation
              </div>
              <div className="text-[12px] text-gray-400">Immediate visual warning</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[14px] text-white">2</span>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">
                Controlled Braking
              </div>
              <div className="text-[12px] text-gray-400">Safe vehicle stop</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[14px] text-white">3</span>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">
                Emergency Services Contact
              </div>
              <div className="text-[12px] text-gray-400">GPS + Event data transmitted</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Contacts Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
        <div className="text-[14px] font-medium text-white mb-5">
          Emergency Contacts
        </div>
        
        <div className="flex gap-4">
          <button className="flex-1 h-12 bg-red-500 text-white text-[14px] rounded-lg hover:bg-red-600 transition-colors">
            Emergency: 112
          </button>
          <button className="flex-1 h-12 bg-gray-700 text-white text-[14px] rounded-lg hover:bg-gray-600 transition-colors">
            Family Contact
          </button>
        </div>
      </div>
    </div>
  );
}
