import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Badge,
  Separator,
} from "../components/ui";

export function DesignSystemShowcase() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎨 Prism Design System</h1>
        <p className="text-xl text-muted-foreground">
          Authentic design tokens from Prism UI - Technical, Clean, Minimalist,
          Confident
        </p>
      </div>

      {/* Brand Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-brand-50 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 50</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 95%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-100 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 100</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 86%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-200 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 200</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 77%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-300 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 300</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 68%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-400 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 400</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 59%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-500 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 500</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 50%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-600 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 600</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 41%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-700 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 700</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 32%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-800 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 800</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 23%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-900 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 900</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 14%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-brand-950 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Brand 950</p>
            <p className="text-xs text-muted-foreground">hsl(212, 85%, 5%)</p>
          </div>
        </div>
      </section>

      {/* Neutral Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Neutral Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-neutral-50 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 50</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 95%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-100 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 100</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 86%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-200 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 200</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 77%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-300 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 300</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 68%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-400 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 400</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 59%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-500 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 500</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 50%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-600 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 600</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 41%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-700 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 700</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 32%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-800 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 800</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 23%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-900 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 900</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 14%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-neutral-950 rounded-lg border border-border"></div>
            <p className="text-sm font-medium">Neutral 950</p>
            <p className="text-xs text-muted-foreground">hsl(0, 0%, 5%)</p>
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Accent Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Accent 1 (Purple)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-accent-1-100 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">100</p>
                <p className="text-xs text-muted-foreground">
                  hsl(262, 50%, 85%)
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent-1-500 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">500</p>
                <p className="text-xs text-muted-foreground">
                  hsl(262, 50%, 50%)
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent-1-900 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">900</p>
                <p className="text-xs text-muted-foreground">
                  hsl(262, 50%, 15%)
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Accent 2 (Amber)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-accent-2-100 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">100</p>
                <p className="text-xs text-muted-foreground">
                  hsl(38, 50%, 85%)
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent-2-500 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">500</p>
                <p className="text-xs text-muted-foreground">
                  hsl(38, 50%, 50%)
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent-2-900 rounded-lg border border-border"></div>
                <p className="text-sm font-medium">900</p>
                <p className="text-xs text-muted-foreground">
                  hsl(38, 50%, 15%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Typography</h2>
        <Card>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
              <p className="text-sm text-muted-foreground">
                Used for main page titles (76px)
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Heading 2 - 2xl Semibold
              </h2>
              <p className="text-sm text-muted-foreground">
                Used for section headers (43px)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Heading 3 - xl Medium</h3>
              <p className="text-sm text-muted-foreground">
                Used for subsection headers (32px)
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Heading 4 - lg Medium</h4>
              <p className="text-sm text-muted-foreground">
                Used for subsection headers (24px)
              </p>
            </div>
            <div>
              <p className="text-base">Body text - base size (18px)</p>
              <p className="text-sm text-muted-foreground">
                Small text and captions (14px)
              </p>
            </div>
            <div>
              <p className="text-xs">Extra small text (10px)</p>
              <p className="text-sm text-muted-foreground">
                Used for labels and microcopy
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🔍</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Forms */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
        <Card>
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" placeholder="Enter text here..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-input">Email Input</Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password-input">Password Input</Label>
                <Input
                  id="password-input"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url-input">URL Input</Label>
                <Input
                  id="url-input"
                  type="url"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is a basic card component with header and content sections.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Cards can include various content types and actions.</p>
            </CardContent>
            <div className="px-6 pb-6">
              <Button variant="outline" size="sm">
                Action
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Badges</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Layout Components */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Layout Components</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Separator</h4>
              <p>Content above the separator</p>
              <Separator />
              <p>Content below the separator</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Spacing System</h2>
        <Card>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-medium">Prism Spacing Scale</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-brand rounded"></div>
                  <span className="text-sm">4px (spacing-xs)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand rounded"></div>
                  <span className="text-sm">6px (spacing-s)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-brand rounded"></div>
                  <span className="text-sm">9px (spacing-m)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3.5 h-3.5 bg-brand rounded"></div>
                  <span className="text-sm">14px (spacing-l)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-brand rounded"></div>
                  <span className="text-sm">20px (spacing-xl)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-7.5 h-7.5 bg-brand rounded"></div>
                  <span className="text-sm">30px (spacing-2xl)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11.5 h-11.5 bg-brand rounded"></div>
                  <span className="text-sm">46px (spacing-3xl)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Border Radius</h2>
        <Card>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Prism Border Radius Values</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 w-16 bg-brand rounded-sm"></div>
                  <p className="text-sm font-medium">Small</p>
                  <p className="text-xs text-muted-foreground">
                    4px (radius-sm)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-16 bg-brand rounded-md"></div>
                  <p className="text-sm font-medium">Medium</p>
                  <p className="text-xs text-muted-foreground">
                    12px (radius-md)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-16 bg-brand rounded-lg"></div>
                  <p className="text-sm font-medium">Large</p>
                  <p className="text-xs text-muted-foreground">
                    18px (radius-lg)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-16 bg-brand rounded-full"></div>
                  <p className="text-sm font-medium">Full</p>
                  <p className="text-xs text-muted-foreground">
                    24px (radius-full)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Responsive Design */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Responsive Design</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <p className="font-medium">Mobile</p>
                <p className="text-sm text-muted-foreground">1 column</p>
              </div>
              <div className="bg-muted p-4 rounded text-center">
                <p className="font-medium">Tablet</p>
                <p className="text-sm text-muted-foreground">2 columns</p>
              </div>
              <div className="bg-muted p-4 rounded text-center">
                <p className="font-medium">Desktop</p>
                <p className="text-sm text-muted-foreground">3 columns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dark Mode Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Dark Mode Support</h2>
        <Card>
          <CardContent>
            <p className="text-muted-foreground">
              All components automatically support dark mode through CSS custom
              properties. The design system uses semantic color tokens that
              adapt to light and dark themes. Toggle dark mode by adding the{" "}
              <code className="bg-muted px-1 rounded">dark</code> class to your
              HTML element.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Brand Personality */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Brand Personality</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Characteristics</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Technical</li>
                  <li>• Clean</li>
                  <li>• Minimalist</li>
                  <li>• Confident</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Density: Cozy</li>
                  <li>• Corner Radius: 12px</li>
                  <li>• Shadows: None (clean)</li>
                  <li>• Motion: Expressive</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
