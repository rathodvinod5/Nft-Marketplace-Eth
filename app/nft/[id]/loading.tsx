export default function Loading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-2xl" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-card rounded-xl" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-10 bg-card rounded-lg w-3/4" />
            <div className="space-y-4">
              <div className="h-20 bg-card rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-card rounded-lg" />
                ))}
              </div>
            </div>
            <div className="h-32 bg-card rounded-xl" />
            <div className="h-12 bg-primary/20 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}