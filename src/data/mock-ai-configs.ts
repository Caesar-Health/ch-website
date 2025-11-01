/**
 * Mock AI Configuration Data
 */

import type { STTConfig, LLMConfig, TTSConfig } from '@/types/ai-config'

/**
 * Mock Speech-to-Text Configurations
 */
export const mockSTTConfigs: STTConfig[] = [
  {
    id: 'stt-1',
    type: 'stt',
    name: 'Whisper Large V3',
    description: 'High-accuracy transcription for medical encounters',
    languages: ['en', 'es', 'fr'],
    provider: 'whisper',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    config: {
      model: 'whisper-large-v3',
      language: 'en',
      punctuate: true,
      profanityFilter: false,
      diarization: true,
      timestamps: true,
      temperature: 0.0,
    },
  },
  {
    id: 'stt-2',
    type: 'stt',
    name: 'Deepgram Nova 2',
    description: 'Fast and accurate real-time transcription',
    languages: [], // All languages
    provider: 'deepgram',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
    config: {
      model: 'nova-2',
      punctuate: true,
      diarization: true,
      smartFormat: true,
      profanityFilter: false,
      redact: ['pci', 'ssn'],
    },
  },
  {
    id: 'stt-3',
    type: 'stt',
    name: 'Google Medical STT',
    description: 'Optimized for medical terminology',
    languages: ['en'],
    provider: 'google',
    isActive: false,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
    config: {
      model: 'medical_conversation',
      enableAutomaticPunctuation: true,
      enableWordTimeOffsets: true,
      enableSpeakerDiarization: true,
      useEnhanced: true,
    },
  },
]

/**
 * Mock LLM Configurations
 */
export const mockLLMConfigs: LLMConfig[] = [
  {
    id: 'llm-1',
    type: 'llm',
    name: 'GPT-4 Turbo Medical',
    description: 'Advanced medical note generation and extraction',
    languages: [], // All languages
    provider: 'openai',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    config: {
      model: 'gpt-4-turbo-preview',
      temperature: 0.3,
      maxTokens: 4096,
      topP: 0.95,
      frequencyPenalty: 0.0,
      presencePenalty: 0.0,
      systemPrompt:
        'You are a medical AI assistant specialized in creating accurate clinical documentation. Follow HIPAA guidelines and maintain professional medical terminology.',
    },
  },
  {
    id: 'llm-2',
    type: 'llm',
    name: 'Claude 3 Opus Medical',
    description: 'High-quality medical documentation with excellent context understanding',
    languages: [],
    provider: 'anthropic',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
    config: {
      model: 'claude-3-opus-20240229',
      temperature: 0.2,
      maxTokens: 4096,
      topP: 0.9,
      systemPrompt:
        'You are Claude, a medical documentation assistant. Create accurate, concise clinical notes following standard medical documentation practices.',
    },
  },
  {
    id: 'llm-3',
    type: 'llm',
    name: 'GPT-3.5 Fast Extraction',
    description: 'Quick entity extraction for routine tasks',
    languages: ['en'],
    provider: 'openai',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
    config: {
      model: 'gpt-3.5-turbo',
      temperature: 0.1,
      maxTokens: 2048,
      topP: 0.9,
      frequencyPenalty: 0.0,
      presencePenalty: 0.0,
      systemPrompt: 'Extract structured medical information from the provided text.',
    },
  },
  {
    id: 'llm-4',
    type: 'llm',
    name: 'Azure OpenAI Medical',
    description: 'Enterprise-grade medical AI with Azure compliance',
    languages: [],
    provider: 'azure',
    isActive: false,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
    config: {
      model: 'gpt-4-32k',
      temperature: 0.3,
      maxTokens: 8192,
      topP: 0.95,
      deploymentName: 'medical-gpt4-deployment',
      apiVersion: '2024-02-15-preview',
    },
  },
]

/**
 * Mock Text-to-Speech Configurations
 */
export const mockTTSConfigs: TTSConfig[] = [
  {
    id: 'tts-1',
    type: 'tts',
    name: 'Dr. Sarah - Professional Female',
    description: 'Clear, professional female voice ideal for patient communications',
    languages: ['en'],
    provider: 'elevenlabs',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    config: {
      model: 'eleven_multilingual_v2',
      voiceId: 'EXAVITQu4vr4xnSDxMaL',
      voiceName: 'Sarah',
      stability: 0.5,
      similarityBoost: 0.75,
      style: 0.0,
      useSpeakerBoost: true,
    },
  },
  {
    id: 'tts-2',
    type: 'tts',
    name: 'Dr. Michael - Professional Male',
    description: 'Warm, authoritative male voice for medical instructions',
    languages: ['en'],
    provider: 'elevenlabs',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    config: {
      model: 'eleven_multilingual_v2',
      voiceId: 'TxGEqnHWrfWFTfGW9XjX',
      voiceName: 'Michael',
      stability: 0.6,
      similarityBoost: 0.8,
      style: 0.0,
      useSpeakerBoost: true,
    },
  },
  {
    id: 'tts-3',
    type: 'tts',
    name: 'Maria - Spanish Medical',
    description: 'Native Spanish speaker for Spanish-speaking patients',
    languages: ['es'],
    provider: 'elevenlabs',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
    config: {
      model: 'eleven_multilingual_v2',
      voiceId: 'IKne3meq5aSn9XLyUdCD',
      voiceName: 'Maria',
      stability: 0.5,
      similarityBoost: 0.75,
      style: 0.0,
      useSpeakerBoost: true,
    },
  },
  {
    id: 'tts-4',
    type: 'tts',
    name: 'OpenAI Alloy',
    description: 'Neutral, balanced voice for general use',
    languages: [], // All languages
    provider: 'openai',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: true,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
    config: {
      model: 'tts-1-hd',
      voice: 'alloy',
      speed: 1.0,
      responseFormat: 'mp3',
    },
  },
  {
    id: 'tts-5',
    type: 'tts',
    name: 'OpenAI Nova',
    description: 'Energetic and engaging voice',
    languages: [],
    provider: 'openai',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: false,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
    config: {
      model: 'tts-1-hd',
      voice: 'nova',
      speed: 1.0,
      responseFormat: 'mp3',
    },
  },
  {
    id: 'tts-6',
    type: 'tts',
    name: 'Google Neural2 - Female',
    description: 'High-quality Google Cloud TTS voice',
    languages: ['en'],
    provider: 'google',
    audioSampleUrl: '/audio/sample-ai-voice.mp3',
    isActive: false,
    isPrecreated: true,
    createdBy: 'system',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
    config: {
      voice: 'en-US-Neural2-F',
      pitch: 0.0,
      speed: 1.0,
      volumeGainDb: 0.0,
      effectsProfileId: ['headphone-class-device'],
    },
  },
]

/**
 * Helper function to get configs by type
 */
export function getConfigsByType<T extends 'stt' | 'llm' | 'tts'>(
  type: T
): T extends 'stt'
  ? STTConfig[]
  : T extends 'llm'
    ? LLMConfig[]
    : TTSConfig[] {
  switch (type) {
    case 'stt':
      return mockSTTConfigs as any
    case 'llm':
      return mockLLMConfigs as any
    case 'tts':
      return mockTTSConfigs as any
    default:
      return [] as any
  }
}

/**
 * Helper function to get active configs
 */
export function getActiveConfigs<T extends 'stt' | 'llm' | 'tts'>(type: T) {
  return getConfigsByType(type).filter((config) => config.isActive)
}

